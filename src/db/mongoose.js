const mongoose = require('mongoose')

mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false

})





// const task = new Task({
//     description: '    Going for a walk.',
// })

// task.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

// const user = new User({
//     name: 'Erica Mills',
//     email: 'erica@gmail.com ',
//     age: 24,
//     password: 'ascsdf45'
// })

// user.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })