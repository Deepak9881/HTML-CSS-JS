import { Router } from "express";


let planetrouter = Router()
export default planetrouter;

let planets = ["Earth", "Mars", "Venus"]

planetrouter.get("/all", (req, res) => {
    res.send(planets)
})

planetrouter.put("/add", (req, res) => {
    let pl = req.query.planet
    planets.push(pl)
    res.send(planets)
})
