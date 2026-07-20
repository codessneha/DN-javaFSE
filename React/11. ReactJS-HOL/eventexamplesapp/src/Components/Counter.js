import { useState } from "react";
import "../App.css";

function Counter() {

    const [count, setCount] = useState(0);

    function incrementValue() {
        setCount(count + 1);
    }

    function decrementValue() {
        setCount(count - 1);
    }

    function sayHello() {
        alert("Hello! Counter has been increased.");
    }

    function handleIncrement() {
        incrementValue();
        sayHello();
    }

    function sayWelcome(message) {
        alert(message);
    }

    function onPress() {
        alert("I was clicked");
    }

    return (

        <div className="card">

            <h2>Counter Example</h2>

            <h1>{count}</h1>

            <button onClick={handleIncrement}>
                Increment
            </button>

            <button onClick={decrementValue}>
                Decrement
            </button>

            <br /><br />

            <button onClick={() => sayWelcome("Welcome")}>
                Say Welcome
            </button>

            <br /><br />

            <button onClick={onPress}>
                Synthetic Event
            </button>

        </div>

    );

}

export default Counter;