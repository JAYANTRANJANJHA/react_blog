import { useState } from "react";
import User from "./User";
import College from "./College"
import Student from "./Student";

function App() {
  // let userName = "Jayant";
  // let age=29;
  // let email='anil@test.com';
  let userObject = {
    name: "jayant jha",
    age: 10,
    email: "jrj@test.com"
  }

  let userObject2 = {
    name: "peter jha",
    age: 5,
    email: "peter@test.com"
  }
  
  let collegeNames=['abc','xyz','pqr','llm'];
const[student,setStudent]=useState()
  return (
    <>
      <h1>Props in React Js </h1>
      {student && <Student name={student}/>}
      <button onClick={()=>setStudent("alooman")}>Update Student Name</button>

      
      <College names={collegeNames[0]}/>

      {/* <User name="JRJ" age={29} email="abc@gmail.com"/> */}
      {/* <User name={userName} age={age} email={email}/> */}
      <User user={userObject} />
      <User user={userObject2} />
    </>
  )
}
export default App;

function Student({name}){
    return(
        <>
        <hr />
        <h1>Student Name: {name}</h1>
        <hr />
        </>
    )
}

export default Student;


function College({names}) {
    return (
        <>

            <h1>{names}</h1>

        </>
    )
}

export default College



function User({ user }) {



    return (
        <>
            <hr />
            <h1>User Component</h1>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Email: {user.email}</h2>
        </>
    )
}

export default User