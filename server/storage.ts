import { type DailyChecklistItem, dailyChecklistItems, type WaterIntake, waterIntake } from "@shared/schema";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { eq, and, gte, lte } from "drizzle-orm";

export interface IStorage {
  getChecklistItems(): Promise<DailyChecklistItem[]>;
  getChecklistItemsByDay(day: number): Promise<DailyChecklistItem[]>;
  toggleChecklistItem(taskId: string, day: number, completed: boolean): Promise<DailyChecklistItem>;
  getWaterIntake(): Promise<WaterIntake[]>;
  getWaterIntakeByWeek(weekNumber: number): Promise<WaterIntake[]>;
  updateWaterIntake(day: number, glasses: number): Promise<WaterIntake>;
}

export class PostgresStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;

  constructor() {
    const sql = neon(process.env.DATABASE_URL!);
    this.db = drizzle(sql);
  }

  async getChecklistItems(): Promise<DailyChecklistItem[]> {
    return await this.db.select().from(dailyChecklistItems);
  }

  async getChecklistItemsByDay(day: number): Promise<DailyChecklistItem[]> {
    return await this.db
      .select()
      .from(dailyChecklistItems)
      .where(eq(dailyChecklistItems.day, day));
  }

  async toggleChecklistItem(
    taskId: string,
    day: number,
    completed: boolean
  ): Promise<DailyChecklistItem> {
    const existing = await this.db
      .select()
      .from(dailyChecklistItems)
      .where(
        and(
          eq(dailyChecklistItems.day, day),
          eq(dailyChecklistItems.taskId, taskId)
        )
      );

    if (existing.length > 0) {
      const [updated] = await this.db
        .update(dailyChecklistItems)
        .set({ completed })
        .where(eq(dailyChecklistItems.id, existing[0].id))
        .returning();
      return updated;
    } else {
      const [newItem] = await this.db
        .insert(dailyChecklistItems)
        .values({ day, taskId, completed })
        .returning();
      return newItem;
    }
  }

  async getWaterIntake(): Promise<WaterIntake[]> {
    return await this.db.select().from(waterIntake);
  }

  async getWaterIntakeByWeek(weekNumber: number): Promise<WaterIntake[]> {
    const startDay = (weekNumber - 1) * 7 + 1;
    const endDay = weekNumber * 7;
    return await this.db
      .select()
      .from(waterIntake)
      .where(and(gte(waterIntake.day, startDay), lte(waterIntake.day, endDay)));
  }

  async updateWaterIntake(day: number, glasses: number): Promise<WaterIntake> {
    const existing = await this.db
      .select()
      .from(waterIntake)
      .where(eq(waterIntake.day, day));

    if (existing.length > 0) {
      const [updated] = await this.db
        .update(waterIntake)
        .set({ glasses })
        .where(eq(waterIntake.id, existing[0].id))
        .returning();
      return updated;
    } else {
      const [newItem] = await this.db
        .insert(waterIntake)
        .values({ day, glasses })
        .returning();
      return newItem;
    }
  }
}

export class MemStorage implements IStorage {
  private checklistItems: Map<string, DailyChecklistItem>;
  private waterIntakeItems: Map<number, WaterIntake>;

  constructor() {
    this.checklistItems = new Map();
    this.waterIntakeItems = new Map();
  }

  async getChecklistItems(): Promise<DailyChecklistItem[]> {
    return Array.from(this.checklistItems.values());
  }

  async getChecklistItemsByDay(day: number): Promise<DailyChecklistItem[]> {
    return Array.from(this.checklistItems.values()).filter(
      (item) => item.day === day
    );
  }

  async toggleChecklistItem(
    taskId: string,
    day: number,
    completed: boolean
  ): Promise<DailyChecklistItem> {
    const key = `${day}-${taskId}`;
    let item = this.checklistItems.get(key);
    
    if (!item) {
      item = {
        id: `${day}-${taskId}`,
        day,
        taskId,
        completed,
      };
      this.checklistItems.set(key, item);
    } else {
      item.completed = completed;
      this.checklistItems.set(key, item);
    }
    
    return item;
  }

  async getWaterIntake(): Promise<WaterIntake[]> {
    return Array.from(this.waterIntakeItems.values());
  }

  async getWaterIntakeByWeek(weekNumber: number): Promise<WaterIntake[]> {
    const startDay = (weekNumber - 1) * 7 + 1;
    const endDay = weekNumber * 7;
    return Array.from(this.waterIntakeItems.values()).filter(
      (item) => item.day >= startDay && item.day <= endDay
    );
  }

  async updateWaterIntake(day: number, glasses: number): Promise<WaterIntake> {
    let item = this.waterIntakeItems.get(day);
    
    if (!item) {
      item = {
        id: `water-${day}`,
        day,
        glasses,
      };
    } else {
      item.glasses = glasses;
    }
    
    this.waterIntakeItems.set(day, item);
    return item;
  }
}

export const storage = new PostgresStorage();
