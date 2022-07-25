const { json } = require('express/lib/response');
const { readAllTasks, readTaskById, createTask, deleteTask, updateTask, partialUpdateTask } = require('./tasks.controlles');

const getAll = (req, res) => {
    const response = readAllTasks();
    res.status(200).json({
        items: response.length,
        response
    });
};

const getById = (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ message: "ID isn't number" });

    const response = readTaskById(id);
    if (!response) return res.status(400).json({ message: `There isn't task with that ID` });

    res.status(200).json(response);
};

const postTask = (req, res) => {
    const data = req.body;
    
    if (!data || !Object.keys(data).length) return res.status(400).json({ message: `The request's body is empty` });
    if (Object.keys(data).length < 3) return res.status(400).json({ message: `The request's body must have three properties: title, description, completed`});

    const response = createTask(data);
    res.status(201).json(response);
};

const deleteTaskById = (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ message: "ID isn't number" });

    const response = deleteTask(id);
    if (!response) return res.status(400).json({ message: `There isn't task with that ID` });

    res.status(204).json();
};

const putTask = (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ message: "ID isn't number" });

    const data = req.body;
    if (!data || !Object.keys(data).length) return res.status(400).json({ message: `The request's body is empty` });
    if (Object.keys(data).length < 3) return res.status(400).json({ message: `The request's body must have three properties: title, description, completed` });

    const response = updateTask(data, id);
    if (!response) return res.status(400).json({ message: `There isn't task with that ID` });

    res.status(200).json(response);
};

const patchTask = (req, res) => {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ message: "ID isn't number" });

    const data = req.body;
    if (!data || !Object.keys(data).length) return res.status(400).json({ message: `The request's body is empty` });
    if (!data.hasOwnProperty('completed')) return res.status(400).json({ message: `The request's body should have the property 'completed'` });

    const response = partialUpdateTask(data, id);
    if (!response) return res.status(400).json({ message: `There isn't task with that ID` });

    res.status(200).json(response);
};

module.exports = {
    getAll,
    getById,
    postTask,
    deleteTaskById,
    putTask,
    patchTask
}