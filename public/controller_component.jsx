import { useState } from "react";
function App() {
  // const [val, setVal] = useState("");
  const[name,setName]=useState("");
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState("");
  return (
    <>
      <h1>Controller Component</h1>
      <form action="" method="get">
        <input type="text" value={name} onChange={(evt)=>setName(evt.target.value)} name="" id="" placeholder="Enter Name" />
        <br /><br />
        <input type="password" value={password}placeholder="Enter Password" onChange={(evt)=>setPassword(evt.target.value)} />
        <br /><br />
        <input type="email"  value={email} name="" id="" placeholder="Enter Email" onChange={(evt)=>setEmail(evt.target.value)} />
        <br /><br />
        <button>Submit</button>
        <button onClick={()=>{setEmail('');setName('');setPassword("")}}>Clear</button>
      </form>
      <br /><br /><hr />

      <div className="show">
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
      </div>
      



      {/* <input type="text" value={val} placeholder="enter your name" onChange={(evt) =>setVal(evt.target.value)} />
      <h1>{val}</h1>
      <button onClick={() => setVal("")}>Clear Value</button> */}
    </>
  )
}


export default App;