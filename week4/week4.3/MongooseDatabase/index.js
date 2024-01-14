const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://priyanshub850:Poonambhatt%40850@cluster0.vgraacb.mongodb.net/');


const AdminSchema = new mongoose.Schema({



})

const UserSchema = new mongoose.Schema({


})


const CoursesSchema = new mongoose.Schema({


})



const Admin = mongoose.model('Admin', AdminSchema)

const Users = mongoose.model('Users', UserSchema)

const Courses = mongoose.model('Courses', CoursesSchema)


