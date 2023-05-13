export default class Product {
    constructor(name, cost) {
        this.pName = name;
        this.pCost = cost;


    }
    show() { console.log(this.pName, this.pCost) }
}