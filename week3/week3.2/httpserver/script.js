const express = require("express");
const jwt = require("jsonwebtoken");
const jwtpassword = 734733;
const app = express();
const port = 3600;


const allusers = [{
    UserName: "Priyanshu850@gmail.com",
    Password: 123,
    Name: "Priyanshu"

},
{
    UserName: "Akash665@gmail.com",
    Password: 223,
    Name: "Akash"
},
{
    UserName: "Shubham330@gmail.com",
    Password: 999,
    Name: "Shubham"

}
]
function userexist(username, password) {
    let userExist = false;
    for (let i = 0; i < allusers.length; i++) {

        if (allusers[i].UserName != username || allusers[i].UserName != password) {
            res.status(403).json({
                msg: "invalid user"
            })
            userExist = true;
        }
    } return userExist;

}

app.post('/signin', function (req, res) {

    const username = req.body.username;
    const password = req.body.password;

    if (!userexist(username, password)) {
        res.status(403).json({
            msg: "Invalid id password"
        })
    }


    var token = jwt.sign({ username: username }, jwtpassword);
    return res.json({
        token,
    });

});

app.get('/users', function (req, res) {
    const token = req.header.authorization;
    try {

        const decode = jwt.verify(token, password);
    } catch (err) {
        res.status(403).json({
            msg: "invalid token",
        })
    }

})








app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
