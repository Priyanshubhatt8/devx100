const express = require('express')
const app = express();
const port = 6000;


app.post('/', function (req, res) {

    res.send("hello world")
})



app.listen(port, () => {
    console.log("welcome to the port ")
})