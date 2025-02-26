import express from "express";
import Task from "../models/Task.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// Create Task
router.post("/", authMiddleware, async (req, res) => {
  const task = new Task({ ...req.body, userId: req.user.userId });
  await task.save();
  res.json(task);
});

// Get User's Tasks
router.get("/", authMiddleware, async (req, res) => {
  const tasks = await Task.find({ userId: req.user.userId });
  res.json(tasks);
});

// Update Task
router.put("/:id", authMiddleware, async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(task);
});

// Delete Task
router.delete("/:id", authMiddleware, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

export default router;
