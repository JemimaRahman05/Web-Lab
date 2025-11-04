// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Helper to create sample tasks
function makeTasks() {
  return [
    {
      id: 1,
      title: "Finish lab assignment",
      completed: false,
      priority: "high",
      createdAt: new Date("2025-11-01T10:00:00Z") // JS Date object
    },
    {
      id: 2,
      title: "Read chapter 6",
      completed: true,
      priority: "medium",
      createdAt: new Date("2025-10-28T14:30:00Z")
    },
    {
      id: 3,
      title: "Push code to repo",
      completed: false,
      priority: "low",
      createdAt: new Date("2025-11-03T08:15:00Z")
    },
    {
      id: 4,
      title: "Prepare slides",
      completed: false,
      priority: "high",
      createdAt: new Date("2025-10-30T21:00:00Z")
    },
    {
      id: 5,
      title: "Send report",
      completed: true,
      priority: "medium",
      createdAt: new Date("2025-11-02T12:45:00Z")
    }
  ];
}

// Route: GET /tasks
app.get('/tasks', (req, res) => {
  const tasks = makeTasks();
  // When res.json sends Dates they will be serialized to ISO strings,
  // but in Node they originate as JS Date objects as requested.
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
