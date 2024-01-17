const mongoose = require('mongoose')




mongoose.connect('mongodb+srv://priyanshub850:Poonambhatt%40850@cluster0.vgraacb.mongodb.net/')



const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean


})
const todo = mongoose.model('todo', todoSchema)

module.exports = {
    todo
}