//imports the functions from the controller and decides the type of request and exports it
const express = require('express');
const router = express.Router();
const { getAllTasks,getTask,updateTask,deleteTask, createTask } = require('../controller/tasks.js');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);


module.exports = router