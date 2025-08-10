import { useActionState } from "react";
import './App.css'

function App() {

    const handleLogin = (prevData, formData) => {
        let name = formData.get('name');
        let password = formData.get('password');
        let regex = /^[A-Z0-9]+$/i;
        if (name.length > 7) {
            return { error: 'Max Char exceeded' }

        } else if(!name){
            return{error:'Name Cannot be Blank'}

        }
        else if (!regex.test(password)) {
            return { error: 'only use numbers and alphabet' }

        } else {
            return { message: 'Login Done' }
        }

        // console.log(name, password);


    }

    const [data, action, pending] = useActionState(handleLogin);
    // console.log(data);
    return (
        <>

            <div>
                {
                    data?.message && <span style={{color:"green"}}>{data?.message}</span>
                }
                {
                    data?.error && <span style={{color:"red"}}>{data?.error}</span>
                }
                <h1>Validation with useActionState in React</h1>
                <form action={action}>
                    <input defaultValue={data?.name} type="text" name="name" placeholder="Enter Your Name" />
                    <br /><br />
                    <input defaultValue={data?.password} type="text" name="password" placeholder="Enter Your password" />
                    <br /><br />
                    <button>Login</button></form>








            </div>


        </>
    );
}

export default App;