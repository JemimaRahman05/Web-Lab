const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import tasks router
const tasksRouter = require('./routes/tasks'); // must match module.exports

app.use(express.json());

// Mount tasks router
app.use('/tasks', tasksRouter); // router function required

app.get('/health', (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime() });
});

app.get('/', (req, res) => {
  res.send('Welcome to Task Management API');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
