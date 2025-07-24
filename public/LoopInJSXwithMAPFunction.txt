Loop In JSX with MAP Function

import { useState } from "react";
import User from "./User";
function App() {

  const  userData=[
    {
     name:"peter",
     age:10,
     email:"peter@gmail",
     id:1,
    },
    {
     name :"Raj",
     age:11,
     email:"Raj@gmail",
     id:2,
    },
    {
     name :"Sam",
     age:12,
     email:"Sam@gmail",
     id:3
    }, 
    {
     name :"Tony",
     age:13,
     email:"tony@gmail",
     id:4
    }
  ]
  return (
    <>
<h1>Loop In JSX with MAP Function</h1>

{
  userData.map((user)=>(
    <div key={user.id}>
      <User data={user} />
    </div>
  ))
}
























<h3>Mapped Data</h3>
<table border="1">
  <thead>
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Email</td>
      <td>Age</td>
    </tr>
     </thead>
    <tbody>
      {userData.map((user)=>(
        <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.age}</td>
    </tr>

      ))}
    </tbody>
</table>

<br />

<h3>Dummy Data</h3>
<table border="1">
  <thead>
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Email</td>
      <td>Age</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Jayant</td>
      <td>jayantranjan@986</td>
      <td>18</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Jayant</td>
      <td>jayantranjan@986</td>
      <td>18</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Jayant</td>
      <td>jayantranjan@986</td>
      <td>18</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Jayant</td>
      <td>jayantranjan@986</td>
      <td>18</td>
    </tr>
  </tbody>
</table>

    </>
  )
}

export default App;





const  User =({data})=>{
    return(
        <>
        <h1>User Component</h1>
        <div className="" style={{
            border:"1px solid green",
            padding:"10px",
            margin:"10px",
            width:"400px",
            borderRadius:"10px" 
        }}> 
            
            
            <h3>Name :<span style={{color:'green'}}> {data.name}</span></h3>
            <h3>Age :<span style={{color:'green'}}> {data.age}</span></h3>
            <h3>Email :<span style={{color:'green'}}> {data.email}</span></h3>
            <h3>ID :<span style={{color:'green'}}> {data.id}</span></h3>
        </div>


        </>
    )
}

export default User

