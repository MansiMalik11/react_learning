import { useState } from "react";
import Counter from "./Counter";
function App()
{
const [fruit,setFruit]=useState("Mango");
  function handleFruit(){
    setFruit("Grapes");
  }
  return (
    <div>  
      <h1>State in React</h1>
      <h2>{fruit}</h2>
      <button onClick={handleFruit}>Change fruit</button>
      <Counter></Counter>
    </div>
  )
}

export default App