const express = require('express');
const router = express.Router();

// GET /tasks  → return list of 5 tasks
router.get('/', (req, res) => {
  const tasks = req.app.locals.tasks;
  res.status(200).json({
    success: true,
    data: tasks
  });
});

// GET /tasks/:id → get one task
router.get('/:id', (req, res) => {
  const inputId = req.params.id;

  // Validate numeric id
  const idNum = Number(inputId);
  if (!Number.isInteger(idNum) || idNum <= 0) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  const tasks = req.app.locals.tasks;
  const task = tasks.find(t => t.id === idNum);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json({
    success: true,
    data: task
  });
});

module.exports = router;
