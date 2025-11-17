// server.js
const express = require('express');
const taskRouter = require('./routes/tasks');

const app = express();
const PORT = 3000;

// In-memory storage with 5 tasks
const tasks = [
  { id: 1, title: 'Task One', completed: false, priority: 'low', createdAt: new Date() },
  { id: 2, title: 'Task Two', completed: true, priority: 'medium', createdAt: new Date() },
  { id: 3, title: 'Task Three', completed: false, priority: 'high', createdAt: new Date() },
  { id: 4, title: 'Task Four', completed: true, priority: 'low', createdAt: new Date() },
  { id: 5, title: 'Task Five', completed: false, priority: 'medium', createdAt: new Date() }
];

app.locals.tasks = tasks;

// Middleware
app.use(express.json());

// Health route
app.get('/health', (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime()
  });
});

// Use Router
app.use('/tasks', taskRouter);


// Server start
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
