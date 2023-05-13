import express from "express"

import guestrouter from "./guestsrouter.js"

let app = express()

app.use("/atithi", guestrouter)

import Productrouter from "./productrouter.js"

app.use("/product", Productrouter)

app.listen(2000, () => {
    console.log("Listening to port 2000")
})


