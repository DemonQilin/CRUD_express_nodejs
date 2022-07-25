const express = require('express');
const tasksRouter = require('./tasks/tasks.router').router;
require('dotenv').config();

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use('/api/v1/tasks', tasksRouter);

app.listen(port, () => {
    console.log(`Server started at port: ${port}`)
});