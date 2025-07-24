import { useState } from "react";
import User from "./User";

function App() {
  const [display, setDisplay] = useState(true)
  return (
    <>
      <h1> Toggle in React Js </h1>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {
        display?<h1>JRJ</h1>:null
      }

      {
        display?<User/>:null
      }

    </>
  )
}
export default App;


function User(){

    return(
        <>
        <h1>JAyant</h1>
        </>
    )
}
export default User


import { useState } from "react";


function App() {
  const [count,setCount]=useState(0)
;  
  return (
    <>
    <h1>Multiple Condition in React JS</h1>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Counter</button>
    {
      count==0?<h1>Condition 0</h1>:count==1?<h1>condition 1</h1>:count==2?<h1>condition 2</h1>:<h1>other condition</h1>
    }
      

    </>
  )
}
export default App;