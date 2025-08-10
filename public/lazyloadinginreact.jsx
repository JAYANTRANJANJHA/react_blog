import { lazy, Suspense, useState } from "react";
// import User from "./User";
// import User from "./User";  normal way not effective

const User=lazy(()=>import('./User'));
//lazy loading import


function App(){
    const [load,setLoad]=useState(false)

    return(
        <>
        <h1>Lazy Loading</h1>
        {
            load?<Suspense fallback={<h3>loading...</h3>}><User/></Suspense>:null
        }

        {/* {load?<User/>:null} */}

        <button onClick={()=>setLoad(true)}>Load User</button>
        
        </>

    )
}

export default App;


function User(){

    return(
        <>
        <h1>User Component</h1>
        </>

    )
}

export default User;