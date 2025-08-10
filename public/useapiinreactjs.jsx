import { Suspense ,use} from "react";

const fetchData = () => fetch('https://dummyjson.com/users').then((response) => response.json());
console.log(fetchData());
const userResource = fetchData();

export default function App() {

    return (
        <>
            <h1>use API in React js</h1>
            <Suspense fallback={<p>Loading....</p>}>
                <Users userResource={userResource} />
            </Suspense>


        </>

    )
}

const Users = ({userResource}) => {
    
    const userData=use(userResource);
    console.log(userData.users);
    

    return (
        <>
         <h1>Users List</h1>
        {
            userData?.users?.map((user)=>(
                <h1>{user.firstName}</h1>
            ))
        }

        </>
       

    )
}

