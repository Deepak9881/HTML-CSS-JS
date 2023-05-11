function product(name, cost, desc) {
    this.pName = name;
    this.pCost = cost;
    this.pDesc = desc;

    this.showDetails = function () { console.log(this.pName, this.pCost, this.pDesc) }
}
let obj = new product("Pencil", 10, "Apsara")


let products = []
products.push(new product("pen", 10, "blue"))
products.push(new product("pencil", 20, "Camlin"))
products.push(new product("Notebook", 70, "Classmate"))



// for (x of products) {
//     x.showDetails()
// }
for (x in products) {
    products[x].showDetails()
}

