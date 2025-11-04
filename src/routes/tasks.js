const express = require('express');
const router = express.Router();

// Sample tasks
const tasks = [
  { id: 1, title: "Task One", completed: false, priority: "high", createdAt: new Date() },
  { id: 2, title: "Task Two", completed: true, priority: "medium", createdAt: new Date() },
  { id: 3, title: "Task Three", completed: false, priority: "low", createdAt: new Date() },
  { id: 4, title: "Task Four", completed: true, priority: "high", createdAt: new Date() },
  { id: 5, title: "Task Five", completed: false, priority: "medium", createdAt: new Date() }
];

// GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// GET task by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (task) res.json(task);
  else res.status(404).json({ error: "Task not found" });
});

// ✅ Export router, not an object
module.exports = router;
