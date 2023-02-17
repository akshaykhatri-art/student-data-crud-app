const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Student = require('./models/student');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/register', (req, res) => {
    res.send('Register!!')
})

// mongoose.connect('mongodb://localhost:27017/college');
mongoose.connect('mongodb://127.0.0.1:27017/college');


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.get('/students', async (req, res) => {
    const students = await Student.find({})
    res.render('students/index', {students})
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})