const express = require("express")
const app = express();
const adminrouter = require("./routes/admin")
const userrouter = require("./routes/user")




app.use(express.json())









app.listen(4230, () => {
    console.log("Hi welcome to my server")
})