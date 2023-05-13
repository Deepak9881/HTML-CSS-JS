import express from "express"

import { guest } from "./guestrouter.js"

let app = express();

import planetsrouter from "./PlanetRouter.js";
app.use("/planets", planetsrouter)

import guestsrouter from "./guestrouter.js"
app.use("/guest", guestsrouter)

app.get("/", (req, res) => {
    res.send(guest)
})


app.listen(4000, () => {
    console.log("Listening to port 4000")
    console.log(guest)
})

