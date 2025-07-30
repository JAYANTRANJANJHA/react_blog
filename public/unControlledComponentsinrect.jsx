import { useRef } from "react";

function App() {

    const userRef=useRef();
    const passwordRef=useRef();
    const handleForm=(evt)=>{
        evt.preventDefault();
        const user=document.querySelector("#user").value;
const password=document.querySelector("#password").value;

    }

    const handleFormRef=(evt)=>{
        evt.preventDefault();
        const user=userRef.current.value;
        const password=passwordRef.current.value;
        console.log(user,password)


    }



    return (
        <>
            <h1>Uncontrolled Components</h1>
            <br />
            <form action="" method="post" onSubmit={handleForm}>
                <input type="text" id="user" placeholder="Enter UserName"/>
                <br /><br />
                <input type="text"  id="password" placeholder="Enter Password "/>
                <br /><br />
                <button>Submit</button>

            </form>

            <hr />

             <h1>Uncontrolled Components with useRef</h1>
            <br />
            <form action="" method="post" onSubmit={handleFormRef}>
                <input type="text" ref={userRef} id="userref" placeholder="Enter UserName"/>
                <br /><br />
                <input type="text"  ref={passwordRef} id="passwordref" placeholder="Enter Password "/>
                <br /><br />
                <button>Submit with Ref</button>

            </form>


        </>



    )
}

export default App; 