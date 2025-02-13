import {useState } from "react";
import './App.css';
function Ass() {
    let [counter, setcounter] = useState(16)
    function addValue() {
        if (counter < 20) {
            setcounter(counter + 1)
        }
    }
    function removeValue() {
        if(counter>0) setcounter(counter - 1)
    }
    return (
        <div className ="container">
            <h1>nikhil website</h1>
            <button onClick={addValue}>add value {counter} </button><br/>
            <button onClick={removeValue}>remove value{counter} </button>
        </div>
    );
}
export default Ass;
