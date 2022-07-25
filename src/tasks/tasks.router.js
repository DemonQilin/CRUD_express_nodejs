const router = require('express').Router();
const { getAll, getById, postTask, deleteTaskById, putTask, patchTask } = require('./tasks.http');

router.route('/')
    .get(getAll)
    .post(postTask);

router.route('/:id')
    .get(getById)
    .delete(deleteTaskById)
    .put(putTask)
    .patch(patchTask);

module.exports = {router}