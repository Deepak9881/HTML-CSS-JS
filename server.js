import express from "express";
let app = express()

app.set("views", "./views")
app.set("view engine", "hbs")

import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
    res.render("registration")
})

app.get("/verify", (req, res) => {
    let name = req.query.User;
    let pwd = req.query.password;


    if (name == "iet" && pwd == "123") {
        let msg2 = "User verified "
        res.render("Repsonse")
    }
    else {
        let msg1 = "Invalid user"
        res.render("registration", { msg: msg1 })
    }
})

app.get("/maths", (req, res) => {
    res.render("calc")
})

app.post("/calculation", (req, res) => {
    let num1 = parseInt(req.body.number1)
    let num2 = parseInt(req.body.number2)

    let sum = num1 + num2
    res.render("calc", { total: sum })

})

app.get("/table", (req, res) => {
    res.render("maths")
})

app.post("/mathstable", (req, res) => {
    let num = req.body.adhyaksh
    let table = []
    for (let i = 1; i <= 10; i++) {
        table[i] = `${num}*${i}=${num * i}`
    }
    res.render("maths", { data: table })



})







app.listen(9881, () => {
    console.log("Listening to port 9881")

})


