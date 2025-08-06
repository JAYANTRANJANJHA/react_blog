import { NavLink, Route, Routes } from 'react-router';
import './App.css'
import UserList from "./UserList";
import UserAdd from './UserAdd';
import UserEdit from './UserEdit';
export default function App() {

return (
    <>
        {/* <h3>Integrate JSON Server API and Loader/Make Routes and Pages for Add User List UI </h3> */}
        {/* <UserList/> */}
        <ul className='nav-list'>
            <li ><NavLink to='/'>LIST</NavLink></li>
            <li><NavLink to="/add">ADD USER</NavLink></li>
          
        </ul>

        <Routes>
<Route path='/' element={<UserList/>} />
<Route path='/add' element={<UserAdd/>} />
<Route path="/edit/:id" element={<UserEdit/>} />
        </Routes>

    </>

)
}


////////////////////////

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function UserList() {

    const [userData, setUserData] = useState([])
    
    const [loading, setLoading] = useState(false)
    
    const navigate=useNavigate();

    const url = "http://localhost:3000/users";
    useEffect(() => {
        setLoading(true);
        getUserData();
    }, [])

    const getUserData = async () => {

        let response = await fetch(url);
        response = await response.json();
        console.log(response);
        setUserData(response);
        setLoading(false);

    }

    const deleteUser = async (id) => {
        console.log(id)
        let response =await fetch(url+'/'+id,{
            method:"delete"
        });
        response =await response.json();
        if(response){
            alert("Response Deleted")
        }
        getUserData();
    }

    const editUser=(id)=>{
        navigate("/edit/"+id)
    }

    return (
        <>

            {
                !loading ?
                    userData.map((user) => (
                        <ul key={user.id} className="user-list">
                            <li>{user.Name}</li>
                            <li>{user.Age}</li>
                            <li>{user.Email}</li>
                            <li><button onClick={() => deleteUser(user.id)} >Delete</button></li>
                            <li><button onClick={()=>editUser(user.id)}>Edit</button></li>
                        </ul>


                    ))
                    : <h1>Loading</h1>

            }

        </>



    )

}



///////////////////


import { useState } from "react";

function UserAdd() {

    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Email, setEmail] = useState('');

    const createUser=async()=>{
        console.log(Name,Age,Email)
        const url="http://localhost:3000/users";
        const response= await fetch(url,{
            method:'Post',
            headers: {
            'Content-Type': 'application/json' // Good practice to include headers
        },
            body:JSON.stringify({Name,Email,Age})
        })
       const result=await response.json();
        if(result){
            alert("New User Added");
        }
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
             
                <h1>
                    Add New User
                </h1>

                <input type="text" onChange={(evt)=>setName(evt.target.value)} placeholder="Enter Name" />
                <br /><br />
                <input type="text" onChange={(evt)=>setAge(evt.target.value)}  placeholder="Enter Age" />
                <br /><br />
                <input type="text" onChange={(evt)=>setEmail(evt.target.value)} placeholder="Enter Email" />
                <br /><br />
                <button onClick={createUser}>Add User</button>

            </div>
        </>
    )
}

export default UserAdd;


///////////////////


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function UserEdit() {

    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Email, setEmail] = useState('');
const navigate=useNavigate();
    const { id } = useParams();
const url = "http://localhost:3000/users/" + id;

    useEffect(() => {
        getUserData()

    }, [])

    const getUserData = async () => {
        console.log(id)
        console.log(url)
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        setName(result.Name);
        setEmail(result.Email);
        setAge(result.Age);
    }

const updateUserData=async()=>{
    console.log(Name,Email,Age);
    const response=await fetch(url,{
        method:'Put',
        body:JSON.stringify({Name,Age,Email})
    })
    const result=await response.json();
    console.log(result)
    if(result){
        alert("Data Is Updated");
    }
    navigate('/')
}

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h3>Edit User Details</h3>
                <input type="text" value={Name} onChange={(evt)=>setName(evt.target.value)} placeholder="User Name" />
                <br /><br />
                <input type="text" value={Email} onChange={(evt)=>setEmail(evt.target.value)} placeholder="User Email" />
                <br /><br />
                <input type="text" value={Age} onChange={(evt)=>setAge(evt.target.value)} placeholder="User Age" />
                <br /><br />
                <button onClick={updateUserData}>Update User</button>
            </div>


        </>
    )
}

export default UserEdit;



/////////////