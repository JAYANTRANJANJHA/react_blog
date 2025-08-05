import { Link, NavLink, Outlet } from "react-router";

export default function College() {
    return (
        <>
        <div className="college">
<h1>College Page</h1>
<h4><Link to="/">Go Back To Home</Link></h4>
<NavLink  className="link" to="">Student</NavLink>
<NavLink className="link" to="department">Departments</NavLink>
<NavLink className="link" to="collegeadmin">College Admin</NavLink>
<NavLink  className="link"to="collegedata">College Data</NavLink>
<Outlet/>


        </div>
        
        </>
        
    )
}