import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Daily checklist item schema
export const dailyChecklistItems = pgTable("daily_checklist_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  day: integer("day").notNull(), // 1-30
  taskId: text("task_id").notNull(), // unique identifier for the task
  completed: boolean("completed").notNull().default(false),
});

export const insertDailyChecklistItemSchema = createInsertSchema(dailyChecklistItems).omit({
  id: true,
});

export type InsertDailyChecklistItem = z.infer<typeof insertDailyChecklistItemSchema>;
export type DailyChecklistItem = typeof dailyChecklistItems.$inferSelect;

// Types for program data structure (not stored in DB, static content)
export interface DayContent {
  day: number;
  week: number;
  date: string;
  motivation: string;
  congratulations: string;
  checklistTasks: ChecklistTask[];
  mealPlan: MealPlanDay;
  workout: WorkoutDay;
}

export interface ChecklistTask {
  id: string;
  label: string;
  category?: string;
}

export interface MealPlanDay {
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks: string;
  notes?: string;
}

export interface DetailedMeal {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  ingredients?: string[];
  addedItems?: string[];
}

export interface DetailedDayMeals {
  dayName: string;
  totalCalories: number;
  totalProtein: number;
  breakfast: DetailedMeal;
  lunch: DetailedMeal;
  snack: DetailedMeal;
  dinner: DetailedMeal;
}

export interface GroceryCategory {
  name: string;
  items: string[];
}

export interface WeeklyGroceryList {
  proteins: string[];
  carbsGrains: string[];
  fruits: string[];
  vegetables: string[];
  pantry: string[];
}

export interface DailyRoutine {
  morning: RoutineStep[];
  midday: RoutineStep[];
  evening: RoutineStep[];
}

export interface RoutineStep {
  action: string;
  duration?: string;
  details?: string;
}

export interface WeeklyPlanData {
  weekNumber: number;
  theme: string;
  weeklyGoal: string;
  dailyCaloriesRange: string;
  dailyProteinRange: string;
  dailyCarbsRange: string;
  dailyVeggiesRange: string;
  dailyMeals: DetailedDayMeals[];
  groceryList: WeeklyGroceryList;
  dailyRoutine: DailyRoutine;
}

export interface WorkoutDay {
  type: string;
  exercises: Exercise[];
  duration: string;
  notes?: string;
}

export interface Exercise {
  name: string;
  sets?: string;
  reps?: string;
  duration?: string;
}

export interface WeekSummary {
  weekNumber: number;
  dateRange: string;
  theme: string;
  goals: string[];
}

// Water intake tracking
export const waterIntake = pgTable("water_intake", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  day: integer("day").notNull(), // 1-30
  glasses: integer("glasses").notNull().default(0), // number of glasses (8oz each)
});

export const insertWaterIntakeSchema = createInsertSchema(waterIntake).omit({
  id: true,
});

export type InsertWaterIntake = z.infer<typeof insertWaterIntakeSchema>;
export type WaterIntake = typeof waterIntake.$inferSelect;
