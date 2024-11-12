require('./db/connect.js');
const express = require('express');
const app = express();
require('dotenv').config();
const tasks = require('./routes/tasks'); //get the tasks from router

//make the data in req.body middle ware
app.use(express.json());

app.get('/hello', (req,res) => {
    res.send('Task Manager App')
})

//uses the finsihed function from routes and uses it and specifies the route here
app.use('/api/users/tasks',tasks)

app.listen(process.env.PORT, console.log(`Server is listening in on port ${process.env.PORT}...`));