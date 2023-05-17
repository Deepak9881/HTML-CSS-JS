import { Component } from "react"

export default class Factorial extends Component {

    constructor({ num1: a }) {
        super({ num1: a })
        this.b = a
    }



    fact() {

        let fact = 1;
        for (let i = 1; i <= this.b; i++) {
            fact = fact * i
        }
        return fact
    }

    render() {

        return <div>

            <p>factorial of {this.b} is {this.fact()}</p>


        </div>
    }

}