import { Router } from "express"

let guestrouter = Router()

export default guestrouter;

let atithi1 = []

guestrouter.get("/", (req, res) => {
    let name = "Sandy"
    res.send(`hostname :${name}`)
})

guestrouter.get("/all", (req, res) => {
    let str = atithi1.map((i, e) => { return e + " " + i })
    res.send(str)
})

guestrouter.post("/addguest", (req, res) => {
    let name = req.query.uname
    atithi1.push(name)
    res.send(`Updated guestlist [${atithi1}]`)
})

guestrouter.get("/guestcount", (req, res) => {
    res.send(`No. of guests are=${atithi1.length}`)
})

guestrouter.put("/changeguestname/:index/:uname", (req, res) => {
    let int = req.params.index
    let name = req.params.uname

    atithi1[int] = name
    res.send(`Updated Guestlist:${atithi1}`)
})

guestrouter.delete("/deleteguest/:ind", (req, res) => {
    let index = req.params.ind
    atithi1.splice(index, 1)
    res.send(`Updated Guestlist:${atithi1}`)
})