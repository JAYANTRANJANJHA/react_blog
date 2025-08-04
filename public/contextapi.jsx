
import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";

export default function App() {
const[subject,setSubject]=useState('')
    return (
        <>
            <div style={{ backgroundColor: "yellow", padding: 10 }}>
                <SubjectContext.Provider value={subject}>
                   <select value={subject} onChange={(evt)=>setSubject(evt.target.value)} name="" id="">
                    <option value="">Select Subject</option>
                    <option value="Maths">Maths</option>
                    <option value="History">History</option>
                    <option value="English">English</option>
                   </select>
                   
                    <h1>Context API</h1>
                    <button onClick={()=>setSubject('')}>Clear Subject</button>
                    <College />


                </SubjectContext.Provider>



            </div>

        </>

    )
}




import { createContext } from "react";

export const SubjectContext=createContext("Math")






import { useContext } from "react"
import { SubjectContext } from "./ContextData"

export default function Subject(){
    const subject=useContext(SubjectContext)

    return(
<>
<div style={{backgroundColor:"pink" ,padding:10 }}>
<h1>Subject is: {subject}</h1>
</div>

</>

    )
}



import ClassComponent from "./ClassComponent";

export default function College(){

    return(
<>
<div style={{backgroundColor:"orange" ,padding:10 }}>
<h1>College Component</h1>
<ClassComponent/>
</div>

</>

    )
}



import Student from "./Student";

export default function ClassComponent(){

    return(
<>
<div style={{backgroundColor:"red" ,padding:10 }}>
<h1>Class Component</h1>
<Student/>
</div>

</>

    )
}



import Subject from "./Subject";

export default function Student(){

    return(
<>
<div style={{backgroundColor:"green" ,padding:10 }}>
<h1>Student Component</h1>
<Subject/>
</div>

</>

    )
}