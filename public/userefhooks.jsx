import {useRef} from "react"

function App(){
const inputRef=useRef(null);
const h1Ref=useRef(null);
const inputHandler=()=>{
    console.log(inputRef)
    inputRef.current.focus();
    inputRef.current.placeholder="Enter Input"
}

const toggleHandler=()=>{
    console.log("toggled")
   if( inputRef.current.style.display!="none"){
     inputRef.current.style.display="none"
   }else{
     inputRef.current.style.display="inline"
   }

}

const h1handler=()=>{
    h1Ref.current.style.color="green"

}
    
    return(
        <>

        <h1 >UseRef Hook in React JS</h1>
        <input ref={inputRef} type="text"  placeholder="Input Value"/>
        <button onClick={inputHandler}>Focus on input Field</button>
<button onClick={toggleHandler}>Toggle</button>

<h1 ref={h1Ref}>Code Step By Step</h1>
<button onClick={h1handler}>Handler</button>
        </>



    )
}

export default App; 