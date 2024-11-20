const { json } = require("express");
const Task = require('../models/Task');
//the functions are made here all function when called look for req and res and manipulate it
const getAllTasks = async (req,res) => {
    try {
        const allTask = await Task.find()
        res.status(200).send(allTask)
    } catch (error) {
        res.status(500).send(error)
    }
};

const createTask = async (req,res) => {
try {
   const test = await Task.create(req.body);
   res.status(200).send(test)
} catch (error) {
    res.status(400).send(error.name )
}

}

const getTask = async (req,res) => {
    try {
        const task = await Task.findById(req.params.id)
        if(!task){
            return res.status(404).send('task not found')
        }
        res.status(201).send(task)
    } catch (error) {
        res.status(500).send(error) 
    }
}

const updateTask = async (req,res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id,req.body)
        if(!task){
            return res.status(404).send('task not found')
        }
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteTask = async (req,res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send('task not found')
        }
        res.status(200).send(`task ${task._id} is deleted successfully`)
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}