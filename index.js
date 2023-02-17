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

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    }
})

const Student = mongoose.model('Student', studentSchema);

// const s = new Student({
//     name: 'Hiren',
//     age: 24,
//     gender: 'male'
// })
// s.save().then(pv=> {
//     console.log(s);
// })
// .catch(e => {
//     console.log(e)
// })

const manyStudents = [
    {
        name: 'Chaman',
        age: 24,
        gender: 'male'
    },
    {
        name: 'Geeta',
        age: 21,
        gender: 'female'
    },
    {
        name: 'Sita',
        age: 21,
        gender: 'female'
    },
    {
        name: 'Rita',
        age: 20,
        gender: 'female'
    },
    {
        name: 'George',
        age: 19,
        gender: 'male'
    }
]

Student.insertMany(manyStudents)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})