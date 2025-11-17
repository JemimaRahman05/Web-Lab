// server.js
const express = require('express');
const taskRouter = require('./routes/tasks');

const app = express();
const PORT = 3000;

// In-memory task storage (5 sample tasks)
const tasks = [
  { id: 1, title: 'Task One', completed: false, priority: 'high', createdAt: new Date() },
  { id: 2, title: 'Task Two', completed: true, priority: 'medium', createdAt: new Date() },
  { id: 3, title: 'Task Three', completed: false, priority: 'low', createdAt: new Date() },
  { id: 4, title: 'Task Four', completed: true, priority: 'high', createdAt: new Date() },
  { id: 5, title: 'Task Five', completed: false, priority: 'medium', createdAt: new Date() },
];

// Attach tasks to app.locals for shared access
app.locals.tasks = tasks;

// Middleware for JSON parsing
app.use(express.json());

// Mount routes
app.use('/tasks', taskRouter);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
