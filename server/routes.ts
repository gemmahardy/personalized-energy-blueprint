import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/checklist", async (req, res) => {
    try {
      const items = await storage.getChecklistItems();
      res.json(items);
    } catch (error) {
      console.error("Error fetching checklist items:", error);
      res.status(500).json({ error: "Failed to fetch checklist items" });
    }
  });

  app.get("/api/checklist/day/:day", async (req, res) => {
    try {
      const day = parseInt(req.params.day);
      if (isNaN(day) || day < 1 || day > 30) {
        return res.status(400).json({ error: "Invalid day number" });
      }
      
      const items = await storage.getChecklistItemsByDay(day);
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch checklist items for day" });
    }
  });

  app.post("/api/checklist/toggle", async (req, res) => {
    try {
      const schema = z.object({
        taskId: z.string(),
        day: z.number().int().min(1).max(30),
        completed: z.boolean(),
      });
      
      const { taskId, day, completed } = schema.parse(req.body);
      const item = await storage.toggleChecklistItem(taskId, day, completed);
      res.json(item);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid request data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to toggle checklist item" });
    }
  });

  app.get("/api/water", async (req, res) => {
    try {
      const items = await storage.getWaterIntake();
      res.json(items);
    } catch (error) {
      console.error("Error fetching water intake:", error);
      res.status(500).json({ error: "Failed to fetch water intake data" });
    }
  });

  app.get("/api/water/week/:week", async (req, res) => {
    try {
      const week = parseInt(req.params.week);
      if (isNaN(week) || week < 1 || week > 4) {
        return res.status(400).json({ error: "Invalid week number" });
      }
      
      const items = await storage.getWaterIntakeByWeek(week);
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch water intake for week" });
    }
  });

  app.post("/api/water/update", async (req, res) => {
    try {
      const schema = z.object({
        day: z.number().int().min(1).max(30),
        glasses: z.number().int().min(0).max(16),
      });
      
      const { day, glasses } = schema.parse(req.body);
      const item = await storage.updateWaterIntake(day, glasses);
      res.json(item);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid request data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to update water intake" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
