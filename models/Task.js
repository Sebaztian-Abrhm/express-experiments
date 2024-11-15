const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    TaskName : {type : String, required : true},
    Completed : {type : Boolean, default : false}
})

module.exports = mongoose.model('Task',TaskSchema)