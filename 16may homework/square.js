import { Component } from "react"

export default class Square extends Component {

    constructor() {
        super()
        this.num1 = 0
        this.state = { sqr: 0 }
    }

    textinput = (e) => {
        this.num1 = e.target.value
        console.log(this.num1)
        let x = this.num1 * this.num1
        this.setState({ sqr: x })

    }



    render() {
        return <div>
            <input type="number" onBlur={this.textinput}></input>
            <p><b> Square of number={this.state.sqr}</b></p>
        </div>
    }
}


