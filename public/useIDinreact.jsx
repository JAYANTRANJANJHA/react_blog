
import { useId } from "react";
export default function App() {

    return (
        <>
            <UserForm />
            <hr />
             <UserForm />



        </>

    )

}

function UserForm() {
    const name = useId();
    const password = useId();
    const skills = useId();
    // const terms = useId();
    const user=useId();

    return (
        <>
            <h1>{name}</h1>
            <h1>{password}</h1>
            <h1>{skills}</h1>
            {/* <h1>{terms}</h1> */}
            <h1>{user}</h1>

            <div>
                <form action="">
                    <label htmlFor={name}>Enter Name</label>
                    <input id={name} type="text" placeholder="Enter Name" />
                    <br /><br />
                    <label htmlFor={password}>Enter Password</label>
                    <input id={password} type="text" placeholder="Enter Password" />
                    <br /><br />
                    <label htmlFor={skills}>Enter Skills</label>
                    <input id={skills} type="text" placeholder="Enter Password" />
                    <br /><br />
                    <label htmlFor={user +"terms"}>Enter terms</label>
                    <input id={user +"terms"} type="text" placeholder="Enter terms" />
                </form>
            </div>
        </>
    )

}
