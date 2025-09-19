import { useState } from "react";
import Counter from "./Counter";
function App() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <h1>Toggle or Hide and show in React</h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display ? <h2>Mansi</h2> : null}
      {display ? <Counter /> : null}

    </div>
  )
}

export default App