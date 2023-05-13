import { Router } from "express"

let guestrouter = Router()

export default guestrouter;

let guest = []


guestrouter.get("/all", (req, res) => {
    res.send(guest)
})

guestrouter.post("/add/:name", (req, res) => {
    let gue = req.params.name
    guest.push(gue)
    res.send(guest)
})

guestrouter.delete("/del/:index", (req, res) => {
    let ind = req.params.index
    guest.splice(ind, 1)
    res.send(guest)
})

export { guest }