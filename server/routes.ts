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

  const httpServer = createServer(app);
  return httpServer;
}
