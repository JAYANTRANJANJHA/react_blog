import { useState } from "react"

export default function App(){
    const colors=JSON.parse(localStorage.getItem('color'))
    const[r,setR]=useState(colors && colors.r?colors.r:0);
    const[g,setG]=useState(colors && colors.g?colors.g:0);
    const[b,setB]=useState(colors && colors.b?colors.b:0);

    const saved=()=>{
        localStorage.setItem("color",JSON.stringify({r,g,b}))
    }

    return(
        <>
        <h1>Color Mixer</h1>

<div style={{backgroundColor:'rgb('+r+','+g+','+b+')' ,height:200, width:200,margin:20}}>d</div>

        <label htmlFor="">Red</label>
        <input value={r} type="range" onChange={(evt)=>setR(evt.target.value)} min={0} max={255} />
        <br /><br />
        <label htmlFor="">Green</label>
        <input value={g} type="range" min={0} max={255} onChange={(evt)=>setG(evt.target.value)} />
        <br /><br />
        <label htmlFor="">Blue</label>
        <input value={b} type="range" min={0} max={255} onChange={(evt)=>setB(evt.target.value)} />
<br /><br />
<button onClick={saved}>Save</button>
        
        
        </>


    )

}

