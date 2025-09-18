import Task from "./Task"
import Header, {Fruit, Color, User} from "./Header"
 //outside function will work without an error if inside function got commented
 const arrowfun=()=>{
    alert("This is outside arrow function");
  }
function App(){
  //Normal function
  function callme(){
    alert("This is normal function");
  }
  //Arrow function
  const arrowfun=()=>{
    alert("This is arrow function");
  }
  //by passing parameters 
  function param(name){
    alert(name);
  }
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
      <button onClick={callme}>Click</button>
      <button onClick={arrowfun}>Arrow Function</button>
      <button onClick={()=>param("Mansi")}>Parameter pass Function</button>
      <button onClick={()=>param("Malik")}>Parameter pass Function</button>


    </div>
  )
}

export default App