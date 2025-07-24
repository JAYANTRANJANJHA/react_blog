import { useEffect } from "react"

const Counter = ({ count, data }) => {


    const handleCounter = () => {
        console.log("handle counter called")
    }

        const handleData = () => {
            console.log("handle data called")
        }


        useEffect(() => {
            handleCounter();
        }, [count])


        useEffect(() => {
            handleData();
        }, [data])


    

    return(
        <>
            <h3>Counter Component {count} </h3>
            <h3>Data Component {data} </h3>

        </>

    )
}

export default Counter;




import { useState } from "react";

import Counter from "./Counter";


function App() {

  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)


  return (

    <>

      <Counter count={count} data={data}/>
      <button onClick={() => setCount(count + 1)} > Counter {count}</button>
      <button onClick={() => setData(data + 1)} > Data {data}</button>
    </>
  )
}
export default App;

