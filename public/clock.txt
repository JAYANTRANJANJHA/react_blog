import { useState } from "react";
import Clock from "./Clock";

function App() {

  const [color,setColor]=useState('yellow')


  return (
    <>
      <h1>Clock In React </h1>
      
<div style={{margin:"15px" ,padding:"15px"}}>
      <select onChange={(evt)=>setColor(evt.target.value)} name="" id="">
        <option value={"yellow"}>yellow</option>
        <option value={"red"}>red</option>
        <option value={"green"}>green</option>
        <option value={"blue"}>blue</option>
        <option value={"black"}>black</option>
        <option value={"orange"}>orange</option>

      </select>
</div>

<Clock color={color} />



    </>
  )
}

export default App;


import { useState } from "react";
import { useEffect } from "react";

const Clock = ({color}) => {
    const[time,setTime]=useState(0)

    useEffect(()=>{
        const intervalId =setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)

        return()=>{
            clearInterval(intervalId)
        }
    },[])


    return (
        <>
            <h1 style={{color:color , display:"inline"}}> {time}  </h1>
        </>
    )
}

export default Clock