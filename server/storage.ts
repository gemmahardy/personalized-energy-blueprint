import { type DailyChecklistItem, type InsertDailyChecklistItem } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getChecklistItems(): Promise<DailyChecklistItem[]>;
  getChecklistItemsByDay(day: number): Promise<DailyChecklistItem[]>;
  toggleChecklistItem(taskId: string, day: number, completed: boolean): Promise<DailyChecklistItem>;
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
      const id = randomUUID();
      item = {
        id,
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

export const storage = new MemStorage();
