import { useState } from "react";

const  useToggle=(daefaultVal)=>{
    const[value,setValue]=useState(daefaultVal);
    function toggleValue(val){
        if(typeof val!='boolean'){
            setValue(!value)

        }else{
            setValue(val)
        }
    }

    return [value,toggleValue];
}

export default useToggle;



import useToggle from "../public/useToggle"



export default function App() {
const[value,toggleValue]=useToggle(true)
const[data,setData]=useToggle(true)

    return (
        <>


<button onClick={toggleValue}>toggle heading</button>
<button onClick={()=>toggleValue(false)}>hide heading</button>
<button onClick={()=>toggleValue(true)}>show heading</button>

{
    value?<h2>Custom Hooks In React</h2>:null
}

<hr />
<button onClick={setData}>toggle heading</button>
<button onClick={()=>setData(false)}>hide heading</button>
<button onClick={()=>setData(true)}>show heading</button>

{
    data?<h2>Heading 2</h2>:null
}


        </>

    )
}