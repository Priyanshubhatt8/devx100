const express = require('express')
const app = express();
const port = 9000;


app.get('/', function (req, res) {

    res.send("hello world")
})



app.listen(port, () => {
    console.log("welcome to the port ")
})