const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://priyanshub850:Poonambhatt%40850@cluster0.vgraacb.mongodb.net/');
const username = "Priyanshu bhatt"
const password = "7347"


const UserSchema = new mongoose.Schema({
    username: String,
    password: String

})



const newentry = mongoose.model('newentry', UserSchema)
// newentry.create({
//     username,
//     password
// })




// newentry.updateOne({ id: '65a42e20edcd7186063ffce3', $push: { age: "67" } })

newentry.deleteMany({
    username,
    password
})