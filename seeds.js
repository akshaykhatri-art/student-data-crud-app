const mongoose = require('mongoose');
const Student = require('./models/student');

mongoose.connect('mongodb://localhost:27017/collegeData', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!")
        console.log(err)
    })

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