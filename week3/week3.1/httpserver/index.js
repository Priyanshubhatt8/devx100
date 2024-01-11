// const express = require('express')
// const port = 5600;
// const app = express();



// function userMiddleware(req, res, next) {
//     const user = req.headers.user
//     const lastname = req.headers.lastname
//     if (user != "priyanshu" && lastname != "bhatt") {
//         res.status(403).json({
//             msg: "incorrect inputs"
//         })
//     } else {
//         next();
//     }
// }

// function kidneysmuiddleware(req, res, next) {
//     const kidneys1 = req.query.kidneys1;
//     // const kidneys2 = req.query.kidneys2;
//     if (kidneys1 != 1) {
//         res.status(403).json({
//             msg: "incorrect inputs"
//         })
//     }
//     else {
//         next();
//     }
// }


// app.get('/healthcheckup', userMiddleware, kidneysmuiddleware, function (req, res) {

//     res.send("You are fine")
// })

// app.use(express.json());
// const zod = require('zod')

// function akamiddleware(obj) {
//     const schema = zod.object({

//         email: zod.string().email(),
//         password: zod.string().min(7)
//     })

//     const response = schema.safeParse(obj);
//     console.log(response)
// }

// app.get('/', (req, res) => {



//     const input = req.body.input;
//     const response = akamiddleware(input);

//     if (!response.success) {
//         return res.status(401).json({
//             msg: "Wrong input"
//         })
//     } else {

//         res.json({
//             msg: "You are sucessfull user"
//         })
//     }
// })

// app.listen(port)