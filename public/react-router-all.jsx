import { Route, Routes } from "react-router"
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import College from "./College";
import Student from "./Student";
import Departments from "./Department";
import CollegeAdmin from "./CollegeAdmin";
import CollegeData from "./CollegeData";
import UserList from "./UserList";
import PageNotFound from "./PageNotFound";
import UserDetails from "./UserDetails";


function App() {

    return (
        <>
            {/* <NavBar></NavBar> */}

            <Routes>

                <Route element={<NavBar />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/users/list?" element={<UserList />} />

                    <Route path='/users/:id/:name?' element={<UserDetails />} />


                    <Route path='in'>
                        <Route path='/in/user'>
                            <Route path="/in/user/about" element={<About />} />
                            <Route path="/in/user/login" element={<Login />} />
                        </Route>
                    </Route>
                </Route>
                <Route path="/college" element={<College />} >
                    <Route index element={<Student />} />
                    <Route path="department" element={<Departments />} />
                    <Route path="collegeadmin" element={<CollegeAdmin />} />
                    <Route path="collegedata" element={<CollegeData />} />
                </Route>
                <Route path='/*' element={<PageNotFound />} />
                {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
            </Routes>

        </>


    )
}

export default App;

////////////////////

export default function Home() {
    return (
        <h1>Home Page</h1>
    )
}


////////////////////////

import { NavLink, Outlet } from "react-router";
import './header.css'
export default function NavBar() {
    return (

        <>

            <div className="header">
                <div>
                    <NavLink className="link" to={"/"}><img src="https://tse2.mm.bing.net/th/id/OIP.83DB4K24AZTdPqEORovGmgHaHN?rs=1&pid=ImgDetMain&o=7&rm=3" alt="react-img" /></NavLink>
                </div>

                <div>
                    <ul>
                        <li><NavLink className="link" to="/">Home</NavLink></li>
                        <li><NavLink className="link" to="/in/user/login">Login</NavLink></li>
                        <li><NavLink className="link" to="/in/user/about">About</NavLink></li>
                        <li><NavLink className="link" to="/college">College</NavLink></li>
                        <li><NavLink className="link" to="/users">User</NavLink></li>
                        <li><NavLink className="link" to="/users/list">List</NavLink></li>
                    </ul>

                </div>

            </div>
            <Outlet />
        </>

    )
}



/////////////////////


import { Link } from "react-router"

export default function UserList() {
    const userData = [
        { id: 1, name: 'JRJ' },
        { id: 2, name: 'MRJ' },
        { id: 3, name: 'MKJ' },
        { id: 4, name: 'AJ' },
        { id: 5, name: 'NJ' },
        { id: 6, name: 'SJ' },
    ]



    return (
        <>
            <div style={{ marginLeft: "20px" }}>
                <h1>UserList Page</h1>
                {
                    userData.map((item) => (
                        <div>
                            <h4><Link to={"/users/" + item.id} >{item.name}</Link></h4>
                        </div>
                    ))
                }


                <h1>UserList Page with Name in URL</h1>
                {
                    userData.map((item) => (
                        <div>
                            <h4><Link to={"/users/" + item.id + "/" + item.name} >{item.name}</Link></h4>
                        </div>
                    ))
                }
            </div>
        </>
    )
}


///////////////

import { Link, useParams } from "react-router"


export default function UserDetails() {

    const paramsData = useParams();


    return (
        <>
            <div style={{ marginLeft: "20px" }}>
                <h1>User Detail Page</h1>
                <h2>User id is :{paramsData.id} </h2>
                <h3><Link to="/users">Go Back</Link></h3>
            </div>
        </>
    )
}


///////////////////


export default function Student() {
    return (
        <h1>Student Page</h1>
    )
}


/////////////////////////


import { Link } from "react-router";

export default  function PageNotFound(){


    return(
        <>
<div style={{textAlign:"center"}}>
        <h1>Page Not Found</h1>
        <h1>404 Error</h1>
       <h3> <Link to="/">Go to Home Page</Link></h3>
        <img src="https://www.shutterstock.com/image-illustration/404-error-page-not-found-260nw-718864618.jpg" alt="" />
</div>
        </>
        

    )
}

//////////////////




export default function Login(){
    return(
        <h1>Login Page</h1>
    )
}


///////////////



body {
    margin: 0;
    padding: 0;
}


.header {
    padding: 10px;
    background-color: aqua;
    display: flex;
    justify-content: space-between;
}

.header ul {
    margin: auto;
    justify-content: space-around;
    list-style-type: none;
    display: flex;
    width: 100%;
    align-items: center;
    box-sizing: border-box;
}

.header ul li{
    padding: 10px;
}

.header .link img{
    margin: 0;
    height: 40px;
    

}

.header .link{
    text-decoration: none;
    font-size: 20px;
}


.college .link{
    text-decoration: none;
    font-size: 20px;
    margin: 10px;

}

.college{
    text-align: center;
}

.active{
    font-weight:800 ;
}

///////////////
