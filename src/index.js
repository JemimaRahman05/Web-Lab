const express = require('express');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// /tasks route
app.get('/tasks', (req, res) => {
  const tasks = [
    {
      id: 1,
      title: 'Finish lab report',
      completed: false,
      priority: 'high',
      createdAt: new Date('2025-11-01T10:00:00Z'),
    },
    {
      id: 2,
      title: 'Review lecture notes',
      completed: true,
      priority: 'medium',
      createdAt: new Date('2025-10-30T14:00:00Z'),
    },
    {
      id: 3,
      title: 'Complete assignment',
      completed: false,
      priority: 'low',
      createdAt: new Date('2025-11-02T09:30:00Z'),
    },
    {
      id: 4,
      title: 'Prepare for quiz',
      completed: false,
      priority: 'high',
      createdAt: new Date('2025-11-03T16:45:00Z'),
    },
    {
      id: 5,
      title: 'Submit project proposal',
      completed: true,
      priority: 'medium',
      createdAt: new Date('2025-10-29T11:20:00Z'),
    },
  ];

  // Send tasks as JSON
  res.json(tasks);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
