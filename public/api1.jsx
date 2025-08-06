import { useEffect, useState } from "react"
import './App.css'
export default function App() {

    const [userData, setUserData] = useState([])

    useEffect(() => {
        getUsersData();
    }, [])

    async function getUsersData() {
        const url = "https://dummyjson.com/user";
        let response = await fetch(url);
        response = await response.json();
        // console.log(response.users);
        setUserData(response.users)
    }
    console.log(userData)
    return (

        <>
            <h1>API</h1>
            <ul className="user-list">
                <li>First Name</li>
                <li>Last Name</li>
                <li>Age</li>
            </ul>

            {
                userData && userData.map((user) => (
                    <ul className="user-list">
                        <li>{user.firstName}</li>
                        <li>{user.lastName}</li>
                        <li>{user.age}</li>
                    </ul>
                ))
            }

        </>
    )
} 