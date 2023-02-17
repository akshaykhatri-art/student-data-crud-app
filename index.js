const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Student = require('./models/student');

// app.get('/register', (req, res) => {
//     res.send('Register!!')
// })

// mongoose.connect('mongodb://localhost:27017/college');
mongoose.connect('mongodb://127.0.0.1:27017/college');


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/students', async (req, res) => {
    const students = await Student.find({})
    res.render('students/index', {students})
})

app.get('/students/register', async (req, res) => {
    res.render('students/register')
})

app.post('/students', async(req, res) => {
    const newStudent = new Student(req.body)
    await newStudent.save()
    res.redirect(`/students/${newStudent._id}`)
})

app.get('/students/:id', async (req, res) => {
    const {id} = req.params;
    const student = await Student.findById(id)
    res.render('students/show', {student})
})

app.get('/students/:id/edit', async(req, res) => {
    const {id} = req.params;
    const student = await Student.findById(id)
    res.render('students/edit', {student})
})

app.put('/students/:id', async(req, res) => {
    const {id} = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body, {runValidaters: true, new: true})
    res.redirect(`/students/${student._id}`)
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})