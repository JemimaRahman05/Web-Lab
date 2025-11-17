const express = require('express');
const tasksRouter = require('./routes/tasks'); // make sure path is correct

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/tasks', tasksRouter); // mount router

app.get('/health', (req, res) => {
    res.json({
        status: "healthy",
        uptime: process.uptime()
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
