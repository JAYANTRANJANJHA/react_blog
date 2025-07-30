import { useState } from "react";

function App() {
    const[pending,setPending]=useState(false);

    const handleButton=async ()=>{
        setPending(true)
 await new Promise(res=>setTimeout(res,2000));
console.log("hello")
        setPending(false)

    }

    return (
        <>


            <h1>
                useTransition Hook in React JS
            </h1>
            <button disabled={pending} onClick={handleButton}> Click Me </button>


        </>

    )
}

export default App; 


import { useState, useTransition } from "react";

function App() {

    const [pending, startTransition] = useTransition();
    const handleButton = () => {

        startTransition(async () => {
            await new Promise(res => setTimeout(res, 5000))
        })

    }

    return (
        <>


            <h1>useTransition Hook in React JS </h1>
              {
                pending ? <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />
                :null
              }
            <button disabled={pending} onClick={handleButton}> Click Me </button>


        </>

    )
}

export default App; 