const express = require("express")
const app = express();
const port = 6777;
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors")
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}))

app.post('/todo', async (req, res) => {

    const payload = req.body
    const parsedpayload = createTodo.safeParse(payload)

    if (!parsedpayload.success) {

        res.status(411).json({
            msg: "You have sent the wrong input "
        })
        await todo.create({
            title: payload.title,
            description: payload.description,
            completed: false
        })
        return;
    }


    res.json({
        msg: "toto created successfully"
    })
    // put it in mongodb
})


app.get('/todos', async (req, res) => {

    const todos = await todo.find({})
    console.log(todo)

    res.json({
        todos
    })

})


app.put('/completed', async (req, res) => {

    const updateid = req.body
    const checkid = updateTodo.safeParse(updateid)

    if (!checkid.success) {
        res.status(411).json({
            msg: "Wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },
        {
            completed: true
        }
    )
    res.json({
        msg: "Todo has been updated "
    })
})


app.listen(port, () => {
    console.log("Welcome to " + port)
})