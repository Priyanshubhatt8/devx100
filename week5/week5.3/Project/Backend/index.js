const express = require("express")
const app = express();
const port = 6777;
const { createTodo, updateTodo } = require("./types")
app.use(express.json());



app.post('/todo', (req, res) => {

    const payload = req.body
    const parsedpayload = createTodo.safeParse(payload)

    if (!parsedpayload.success) {

        res.status(411).json({
            msg: "You have sent the wrong input "
        })
        return;
    }
    // put it in mongodb
})


app.get('/todos', (req, res) => {

})


app.put('/completed', (req, res) => {

    const updateid = req.body
    const checkid = updateTodo.safeParse(updateid)

    if (!checkid.success) {
        res.status(411).json({
            msg: "Wrong inputs"
        })
    }

})


app.listen(port, () => {
    console.log("Welcome to " + port)
})