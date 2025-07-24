import { useEffect } from "react"

const Counter = ({ count, data }) => {

useEffect(()=>{
    console.log("Mounting Phase only")
},[])

useEffect(()=>{
    console.log("Update Phase only")
},[count])

useEffect(()=>{
    return()=>{
        console.log("unmount phase only")
    }
},[])

        

    

    return(
        <>
            <h3>Counter Component {count} </h3>
            <h3>Data Component {data} </h3>

        </>

    )
}

export default Counter;


import { useState } from "react";

import Counter from "./Counter";


function App() {

  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)
  const[display,setDisplay]=useState(true)

  return (

    <>

      {
       display? <Counter count={count} data={data}/>:null
      }
      <button onClick={() => setCount(count + 1)} > Counter {count}</button>
      <button onClick={() => setData(data + 1)} > Data {data}</button>
      <button onClick={()=>(!{display})} >Toggle Display</button>
    </>
  )
}
export default App;

