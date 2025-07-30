import { useState } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

function App() {
  const [user,setUser]=useState('')


    return (
        <>

<AddUser setUser={setUser}/>
<hr />
<DisplayUser user={user}/>



        </>

    )
}

export default App; 




function AddUser({setUser}) {
  

    return (
        <>
<h1>Add User</h1>
<input type="text"  onChange={(evt)=>setUser(evt.target.value)} placeholder="Enter user name" />


        </>

    )
}

export default AddUser; 




function DisplayUser({user}) {


    return (
        <>

<h3>Display User   :   {user}</h3>


        </>

    )
}

export default DisplayUser; 