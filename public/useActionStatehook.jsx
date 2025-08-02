import { useActionState } from "react";


function App() {

    const handleSubmit = async (previousData, formData) => {
        let name = formData.get('name');
        let password = formData.get('password');
        await new Promise(res => setTimeout(res, 2000));
        console.log("handleSubmit Called", name, password);
        if (name && password) {
            return { message: "Data Submitted",name,password }
        }
        else {
            return { error: "Failed to Submit .Enter Proper Data",name,password }
        }

    }

    const [data, action, pending] = useActionState(handleSubmit, undefined)

    return (
        <>
            <h2>
                useActionState Hook in React Js
            </h2>

            <form action={action} >
                <input defaultValue={data?.name} type="text" placeholder="Enter Name" name="name" />
                <br /> <br />
                <input defaultValue={data?.password} type="password" placeholder="Enter Password" name="password" />
                <br /> <br />
                <button disabled={pending} >Submit data</button>
                <br /><br />


            </form>
            {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
            {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}
            <h3>Name: {data?.name}</h3>
            <h3>Password: {data?.password} </h3>


        </>

    )

}


export default App;