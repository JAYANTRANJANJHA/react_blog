import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [counter, setCounter] = useState(0)
  const [data, setData] = useState(0)

  useEffect(() => {
    // callOnce();
    counterFunction();

  }, [counter])

function counterFunction(){
  console.log("Counter Function",counter);

}

  function callOnce() {
    console.log("Call Once Function Called");
  }

  return (

    <>
      <h1>use Effect Hooks</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter{counter}</button>
      <br />
      <button onClick={() => setData(data + 1)}>Data{data}</button>

    </>
  )
}
export default App;