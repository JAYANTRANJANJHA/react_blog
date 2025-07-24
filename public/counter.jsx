import{useState} from "react";

const Counter=()=>{
    const [count,setCount]=useState(0)
    const [rCount,setRCount]=useState(100)
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Update Counter</button>
            <h1>R Counter:{rCount}</h1>
            
            <button onClick={()=>setRCount(rCount-1)}>Update R Counter</button>
            
            
            
        </div>
    )
}
export default Counter;