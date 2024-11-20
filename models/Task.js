const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    TaskName : {type : String, required : true},//required : [true , 'Custome message'] if you want message
    Completed : {type : Boolean, default : false}
})

module.exports = mongoose.model('Task',TaskSchema)