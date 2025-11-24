import { type DailyChecklistItem, dailyChecklistItems } from "@shared/schema";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  getChecklistItems(): Promise<DailyChecklistItem[]>;
  getChecklistItemsByDay(day: number): Promise<DailyChecklistItem[]>;
  toggleChecklistItem(taskId: string, day: number, completed: boolean): Promise<DailyChecklistItem>;
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
}

export class MemStorage implements IStorage {
  private checklistItems: Map<string, DailyChecklistItem>;

  constructor() {
    this.checklistItems = new Map();
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
}

export const storage = new PostgresStorage();
