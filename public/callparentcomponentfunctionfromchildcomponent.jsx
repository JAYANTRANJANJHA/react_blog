// call parent component function from child component


import User from "./User"

function App() {
    const displayName = (name) => {
        alert(name)
    }


    const getUser=()=>{
        alert("get user function called")

    }
    return (
        <>
            <h1>call parent component function from child component</h1>
            <User displayName={displayName} name="jayant"  getUser={getUser}/>
            <User displayName={displayName} name="Ranjan" getUser={getUser}/>
            <User displayName={displayName} name="Jha" getUser={getUser}/>
            <User displayName={displayName} name="kayam" getUser={getUser}/>
            <User displayName={displayName}name="Shyam" getUser={getUser}/>

        </>

    )
}

export default App; 







function User({ displayName,name ,getUser}) {


    return (
        <>


            <button onClick={()=>displayName(name)}>Display Name</button>
            <button onClick={()=>getUser(name)}> Get User</button>
            <br />

        </>
    )


}

export default User;


