const express = require('express');
const cors = require('cors')

const app = express();
const port = 1320;
app.use(cors())

app.get('/', function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const c = a + b;

    res.send(c.toString())
})




app.listen(port)