import { useState } from "react"

export default function Stringop() {
    let str = ""
    let [x, y] = useState("")
    let [a, b] = useState("")

    function texthandler(event) {
        str = event.target.value
        b(str)

    }

    function buttonhandler(event) {
        if (a == "") {
            let str2 = "Enter a String first"
            y(str2)
        }
        else {
            console.log(1)
            let exp = event.target.value
            switch (exp) {
                case "lc":
                    y(a.toLowerCase())
                    break;

                case "uc":
                    y(a.toUpperCase())
                    break;

                case "tc":
                    y((a.charAt(0).toUpperCase()).concat(a.substring(1).toLowerCase()))
                    break;
            }
        }
    }

    return <div style={{ borderStyle: "groove", width: "fit-content", position: "absolute", left: "35%", marginTop: "50px" }}>
        Enter a String: <input type="text" onBlur={texthandler} ></input>
        <br></br>
        String in Lowercase    <input type="radio" name="radio1" value="lc" onChange={buttonhandler}></input><br></br>
        String in Uppercase <input type="radio" name="radio1" value='uc' onChange={buttonhandler}></input><br></br>
        String in Titlecase  <input type="radio" name="radio1" value="tc" onChange={buttonhandler}></input><br></br>
        <p>Result={x}</p>

    </div>

}