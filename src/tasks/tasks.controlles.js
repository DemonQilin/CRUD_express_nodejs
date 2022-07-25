const taskDB = [
    {
        id: 1,
        title: 'Do To Do List',
        description: `It's first activity of Nodejs Module in Academlo`,
        completed: true
    }
];

const readAllTasks = () => {
    return taskDB;
};

const readTaskById = id => {
    const filteredDB = taskDB.filter(task => task.id === id);
    return filteredDB[0]
};

const createTask = dataTask => {
    const { title, description, completed } = dataTask;
    const newTask = {
        id: taskDB.length ? taskDB.at(-1).id + 1 : 1,
        title,
        description,
        completed
    };
    taskDB.push(newTask);
    return taskDB.at(-1);
};

const deleteTask = id => {
    const index = taskDB.findIndex(task => task.id === id);
    if (index === -1) return;

    return taskDB.splice(index, 1)[0];
};

const updateTask = (dataTask, id) => {
    const { title, description, completed } = dataTask;
    const index = taskDB.findIndex(task => task.id === id);
    if (index === -1) return;

    taskDB[index] = { id, title, description, completed };
    return taskDB[index];
};

const partialUpdateTask = (updateState, id) => {
    const { completed } = updateState;
    const index = taskDB.findIndex(task => task.id === id);
    if (index === -1) return;

    taskDB[index] = { ...JSON.parse(JSON.stringify(taskDB[index])), completed };
    return taskDB[index];
};

module.exports = {
    readAllTasks,
    readTaskById,
    createTask,
    deleteTask,
    updateTask,
    partialUpdateTask
}