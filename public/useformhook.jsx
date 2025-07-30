import { useFormStatus } from "react-dom";

function App() {

    const handleSubmit = async () => {
        await new Promise(res => setTimeout(res, 2000));
        console.log("submit")

    }

    function CustomerForm() {
        const {pending}=useFormStatus()
        return (
            <>
                <input type="text" placeholder="name" /><br /><br />
                <input type="text" placeholder="password" /><br /><br />
                <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>

            </>
        )

    }


    return (

        <>
            <h1>useFormStatus</h1>
            <form action={handleSubmit}>
<CustomerForm/>
            </form>

        </>

    )
}

export default App; 