import Task from "./Task"
import Header, {Fruit, Color, User} from "./Header"

function App(){
  return (
    <div>
      <Header/>
      <Task />
      <Fruit />
      <Color />
      <h1>hello world</h1>
      <h1>Mansi learning React</h1>
      <h3>{User}</h3>
      <h3>{10*2}</h3>
      <button onClick={()=>alert("Mansi Malik")}>Click</button>
    </div>
  )
}

export default App