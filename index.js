const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/register', (req, res) => {
    res.send('Register!!')
})

mongoose.connect('mongodb://localhost:27017/collegeData', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!")
        console.log(err)
    })


app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})