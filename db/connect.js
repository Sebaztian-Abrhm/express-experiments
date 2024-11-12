const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.CON_STRING)
.then(() => {
    console.log('Connected DB Successfully');
}) 
.catch(error => {
    console.log(error);
})

