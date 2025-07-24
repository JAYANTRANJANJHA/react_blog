
import User from "./User";
import Wrapper from "./Wrapper";

function App() {
  return (
    <>
      <h1>Props In React JS</h1>
    <Wrapper>
       <h1>Hello Wrapper</h1>
    </Wrapper>


    <Wrapper>
       <h1>Hello Bro</h1>
    </Wrapper>

    
      <User name="JRJ" />
      <User name="Sam" />
      <User name="" />
      <User />
      


    </>
  )
}
export default App;

function Wrapper({children}) {

    return (
        < div style={{color:"green",border :"5px solid green", width:"500px",margin:"10px"}} >
           {children}
        </div>
    )

}

export default Wrapper;


function User({name = "new user"}) {

    return (
        <>
            <h1>Hi ,{name}</h1>
        </>
    )

}

export default User

import { useState } from "react";
function App() {
  const [val, setVal] = useState("");
  return (
    <>
      <h1>get input field</h1>
      <input type="text" value={val} placeholder="enter your name" onChange={(evt) =>setVal(evt.target.value)} />
      <h1>{val}</h1>
      <button onClick={() => setVal("")}>Clear Value</button>
    </>
  )
}

export default App;