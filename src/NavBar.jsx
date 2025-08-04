import { Link } from "react-router";
import './header.css'
export default function NavBar() {
    return (

        <>

            <div className="header">
                <div>
                    <Link className="link" to={"/"}><img src="https://tse2.mm.bing.net/th/id/OIP.83DB4K24AZTdPqEORovGmgHaHN?rs=1&pid=ImgDetMain&o=7&rm=3" alt="react-img"/></Link>
                </div>

                <div>
                    <ul>
                        <li><Link className="link" to="/">Home</Link></li>
                        <li><Link className="link" to="/login">Login</Link></li>
                        <li><Link className="link" to="/about">About</Link></li>
                    </ul>

                </div>


            </div>

        </>

    )
}