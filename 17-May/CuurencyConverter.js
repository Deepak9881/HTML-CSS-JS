import { Component } from "react"

export default class Currency extends Component {

    constructor() {
        super()
        this.num = 0
        this.choice1 = ""
        this.choice2 = ""
        this.state = { res: 0 }
    }
    getnum = (e) => {
        this.num = e.target.value
        console.log(this.num)
    }
    getchoice1 = (e) => {
        this.choice1 = e.target.value
        console.log(this.choice1)

    }
    getchoice2 = (e) => {
        this.choice2 = e.target.value
        console.log(this.choice2)
    }

    convert = (e) => {
        console.log(1)
        switch (this.choice1) {
            case "Dollar":

                if (this.choice2 == "Dollar") {
                    this.setState({ res: this.num })
                }
                else if (this.choice2 == "Ruppese") {
                    let x = this.num * 82
                    this.setState({ res: x })
                }
                else if (this.choice2 == "Euro") {
                    let x = (this.num * 82) / 90
                    this.setState({ res: x })
                }
                break;
            case "Ruppese":

                if (this.choice2 == "Ruppese") {
                    this.setState({ res: this.num })
                }
                else if (this.choice2 == "Dollar") {
                    let x = this.num / 82
                    this.setState({ res: x })
                }
                else if (this.choice2 == "Euro") {
                    let x = this.num / 90
                    this.setState({ res: x })
                }
                break;
            case "Euro":
                if (this.choice2 == "Euro") {
                    this.setState({ res: this.num })
                }
                else if (this.choice2 == "Ruppese") {
                    let x = this.num * 90
                    this.setState({ res: x })
                }
                else if (this.choice2 == "Euro") {
                    let x = (this.num * 90) / 82
                    this.setState({ res: x })
                }
                break;
            default:
                break;
        }
    }



    render() {
        return <div>
            Enter a number <input type="number" name="num" onBlur={this.getnum}></input>
            <br></br>

            <select onBlur={this.getchoice1}>
                <option>select</option>
                <option>Dollar</option>
                <option>Ruppese</option>
                <option>Euro</option>
            </select>
            <select onBlur={this.getchoice2}>
                <option>select</option>
                <option>Dollar</option>
                <option>Ruppese</option>
                <option>Euro</option>
            </select>
            <button onClick={this.convert}> Convert</button>
            <p>Value={this.state.res}</p>
        </div>
    }

}