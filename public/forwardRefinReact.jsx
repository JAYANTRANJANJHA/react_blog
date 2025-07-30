import { useRef } from "react";
import UserInput from "./UserInput";

function App() {
    const inputRef=useRef(null);
    const updateInput=()=>{
        inputRef.current.value=1000;
        inputRef.current.focus();
    }
    
    return (
        <>
            <h1>Forward Ref in React</h1>
            <UserInput ref={inputRef}/>
            <button onClick={updateInput}>Update Input Field</button>

        </>

    )
}

export default App; 



// import {forwardRef} from "react";

// const UserInput=(props,ref)=>{


//     return(
// <input type="text" ref={ref} />
//     )


// }

// export default forwardRef(UserInput);


const UserInput=(props)=>{
    return(

        <>
        <input type="text" ref={props.ref} />
        </>
    )

}

export default UserInput;