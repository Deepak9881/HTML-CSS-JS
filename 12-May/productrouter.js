// Write a route productrouter mapped to path /product
// create an array of products
// a) Method =POST url=/add pass a request body {
// "productId" :1
// "productName" : "AAA",
// "costPerUnit": 30
// "units": 2
// }


// Add this product Info the products array
// b) Method = GET url=/getInfo pass the product Id as query parameter
// Client will receive the entire product object for that ID
// c) Method = GET url=/all show all array
// d) method= PUT url=/changecost accept product Id and cost from user as path
// parameters and change the cost for that product Id
// e) method= DELETE url=/remove accept a product Id as path parameter and
// remove it from array
import express from "express"
import { Router } from "express"

let Productrouter = Router()

let products = [{
    "productId": 1,
    "productName": "AAA",
    "costPerUnit": 30,
    "units": 2
}]
export default Productrouter

Productrouter.use(express.json())
Productrouter.post("/add", (req, res) => {
    let arr = req.body;
    products.push(arr)
    res.send(products)
})

Productrouter.get("/getinfo", (req, res) => {
    let id = req.query.num
    let id2 = -1;
    for (let i = 0; i < products.length; i++) {
        if (products[i].productId == id) {
            id2 = i
            break
        }
    }
    if (id2 == -1) {
        res.send("Element not found")
    }
    else {
        res.send(products[id2])
    }
})


Productrouter.get("/all", (req, res) => {
    res.send(products)
})


Productrouter.post("/changecost/:id/:ucost", (req, res) => {
    let id = req.params.id
    let cost = req.params.ucost
    let id2 = -1
    for (let i = 0; i < products.length; i++) {
        if (products[i].productId == id) {
            id2 = i
            break
        }
    }
    if (id2 == -1) {
        res.send("Element not found")
    }
    else {
        products[id2].costPerUnit = cost
        res.send(products)
    }
})

Productrouter.delete("/remove/:id", (req, res) => {
    let id = req.params.id
    let id2 = -1
    for (let i = 0; i < products.length; i++) {
        if (products[i].productId == id) {
            id2 = i
            break
        }
    }
    if (id2 == -1) {
        res.send("Element not found")
    }
    else {
        products.splice(id2, 1)
        res.send(products)
    }

})
