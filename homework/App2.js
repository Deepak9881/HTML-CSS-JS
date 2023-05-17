//import logo from './logo.svg';
//import './App.css';
//import Welcome from "./welcome";
//import Desc from "./desc"

import Add from "./Add"
import Factorial from "./Factorial";
import Trial from "./props"

export default function App2() {
    return (
        <div className="App">
            <Add num1={10} num2={20}></Add>
            <Factorial num1={2}></Factorial>
            <Trial num1={10}></Trial>
        </div>

    );
}

