import Trial from "./Trialprops"
import Add from "./prop"
import Stringop from "./String"
import Square from "./square"


export default function App3() {

    let arr = [10, 20, 30]
    let obj = { name: "Sandy", age: 20 }


    return <div>
        {/* <Trial str={"abc"} x={obj}></Trial>
        <Add num1={10} num2={10}></Add>
        <Trial arr1={arr} ></Trial>
        <Trial></Trial>
        <Stringop></Stringop> */}
        <Square></Square>
    </div >
}