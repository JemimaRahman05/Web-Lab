const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Sample tasks array
const tasks = [
  { id: 1, title: "Task One", completed: false, priority: "high", createdAt: new Date() },
  { id: 2, title: "Task Two", completed: true, priority: "medium", createdAt: new Date() },
  { id: 3, title: "Task Three", completed: false, priority: "low", createdAt: new Date() },
  { id: 4, title: "Task Four", completed: true, priority: "high", createdAt: new Date() },
  { id: 5, title: "Task Five", completed: false, priority: "medium", createdAt: new Date() }
];


// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Task Management API! Use /tasks, /task/:id, or /health');
});

// Get task by ID
app.get('/task/:id', (req, res) => {
  const id = parseInt(req.params.id); // Get ID from URL
  const task = tasks.find(t => t.id === id); // Find task by ID

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

// Health check route
app.get('/health', (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime()
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
