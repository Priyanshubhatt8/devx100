// const express = require('express')
// const port = 3500;


// let ans = 0;
// function calculatesum(n) {
//     for (let i = 0; i < n; i++) {
//         ans = ans + i
//     } return ans
// }


// const app = express();

// app.get('/', function (req, res) {
//     const input = req.query.n;// this is basically for input like what are we taking as input means what is the value of n This allows you to pass input values to your server by including them in the URL. In this case, it's expecting a parameter "n" to be provided in the URL, and it uses that value to calculate a sum.
//     const ans = calculatesum(input);
//     res.send(ans.toString())

// })



// app.listen(port, function () {

//     console.log(`Hello welcome to my server ${port}`)
// })

// const express = require('express')
// const app = express();

// app.use(express.json())

// const port = 4600;
// const users = [{
//     name: "Priyanshu",
//     kidneys: [{
//         healthy: false
//     }]
// }]


// app.get('/', (req, res) => {
//     const priyanshukidneys = users[0].kidneys;
//     const lengthofkidneys = priyanshukidneys.length;
//     let healthykidneys = 0;
//     for (let i = 0; i < priyanshukidneys.length; i++) {
//         if (priyanshukidneys[0].healthy) {
//             healthykidneys++;
//         }
//     }
//     const unhealthykidneys = lengthofkidneys - healthykidneys;

//     res.json({
//         lengthofkidneys,
//         healthykidneys,
//         unhealthykidneys
//     })
// }

// )

// app.post('/', (req, res) => {
//     const ishealthy = req.body.ishealthy;
//     users[0].kidneys.push({
//         healthy: ishealthy
//     })



//     res.json({
//         msg: "done"
//     })
// })

// app.put('/', (req, res) => {
//     for (let i = 0; i < users[0].kidneys.length; i++) {

//         users[0].kidneys[0].healthy = true;


//     }
//     res.json({
//         msg: "done"
//     })
// })


// app.delete('/', (req, res) => {
//     let arr = [];
//     for (let i = 0; i < users[0].kidneys.length; i++) {
//         users[0].kidneys.healthy = true;
//     }
//     users[0].kidneys = arr

//     res.json({ msg: "done" })
// })

// app.listen(port, () => {
//     console.log(`Welcome to my port ${port}`)
// })














// const express = require('express')

// const app = express()
// const port = 1200;

// app.use(express.json())

// const user = [{
//     name: "priyanshu",
//     kidneys: [{
//         healthy: true

//     },
//     { unhealthy: false }
//     ]
// }]


// app.get('/', function (req, res) {
//     let getname = user[0].name
//     let getdata = user[0].kidneys.length
//     let healthykidneys = 0;
//     for (let i = 0; i < getdata; i++) {
//         if (user[0].kidneys[i].healthy) {
//             healthykidneys++
//         }
//     }
//     let unhealthykidney = 0;
//     for (let i = 0; i < getdata; i++) {
//         if (user[0].kidneys[i].unhealthy) {
//             unhealthykidney++
//         }

//     }

//     res.json({
//         getdata,
//         healthykidneys,
//         unhealthykidney,
//         getname
//     })
// })



// app.post('/', (req, res) => {
//     const ishealthy = req.body.ishealthy;
//     const isunhealthy = req.body.isunhealthy;

//     user[0].kidneys.push({
//         healthy: ishealthy
//     })
//     user[0].kidneys.push({
//         unhealthy: isunhealthy
//     })
//     res.json({
//         msg: "appending data "
//     })
// })


// app.put('/', (req, res) => {
//     for (let i = 0; i < user[0].kidneys.length; i++) {
//         user[0].kidneys[0].healthy = false;
//         user[0].kidneys[1].unhealthy = true;

//     }
//     res.json({
//         messsage: "Data updated"
//     })
// })

// app.delete('/', () => {

// })





// app.listen(port, () => {
//     console.log(`Hello welcome back to my server ${port}`)
// }
