import { useState } from "react";

const Counter = () => {
    const [number, setNumber] = useState(1);
    const [rCounter, setRCounter] = useState(10);
    // const handleCounter = () => {
    //     setNumber(number + 1);
    // }

    return (
        <div>
            <h2>SimpleCounter: {number}</h2>
            <h2>Reverse Counter: {rCounter}</h2>
            <button onClick={() => { setNumber(number + 1) }}>Simple number</button>
            <button onClick={() => { setRCounter(rCounter - 1) }}>Reverse number</button>
        </div>
    )
}

export default Counter;