const { json } = require("express");

//the functions are made here all function when called look for req and res and manipulate it
const getAllTasks = (req,res) => {
    res.send('get all tasks')
};

const createTask = (req,res) => {
    res.send(req.body);
}

const getTask = (req,res) => {
    res.send({id : req.params.id,
        task : "returned"
    })
}

const updateTask = (req,res) => {
    res.send({id : req.params.id,
        task : "updated"
    })
}

const deleteTask = (req,res) => {
    res.send({id : req.params.id,
        task : "deleted "
    })
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}