import { useState } from "react";
function App() {

  const [cardStyle, setCardStyle] = useState({
    border: "1px solid black",
    width: "16rem",
    boxShadow: "1px 2px 3px 0px red",
    padding: "5px",
    margin: "10px",
  })

  const [textColor, setTextColor] = useState("black")
  const[grid,setGrid]=useState(true)

  const updateTheme = (bgColor, textColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor })
    setTextColor(textColor)

  }

  return (

    <>

      <h1 style={{ color: "red", backgroundColor: "yellow" }}>Inline Style in React JS</h1>
      <button onClick={() => updateTheme('#b0c4b1', 'red')} >Grey Theme</button>  
      <button onClick={() => updateTheme('#ff8fab', 'green')} >Default Theme</button>
      <button onClick={()=>setGrid(!grid)} >Toggle Display</button>


      <div style={{ display: grid?"flex":"block", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img style={{ width: "15rem", padding: "3px" }} src="https://www.liblogo.com/img-logo/re269re79-react-logo-react-logo-.png" alt="reactimg" />
          <div style={{ padding: "5px" , color: textColor}}>
            <h4>Jayant Ranjan Jha</h4>
            <p>Engineer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "15rem", padding: "3px" }} src="https://www.liblogo.com/img-logo/re269re79-react-logo-react-logo-.png" alt="reactimg" />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Jayant Ranjan Jha</h4>
            <p>Engineer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "15rem", padding: "3px" }} src="https://www.liblogo.com/img-logo/re269re79-react-logo-react-logo-.png" alt="reactimg" />
          <div style={{ padding: "5px" , color: textColor}}>
            <h4>Jayant Ranjan Jha</h4>
            <p>Engineer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "15rem", padding: "3px" }} src="https://www.liblogo.com/img-logo/re269re79-react-logo-react-logo-.png" alt="reactimg" />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Jayant Ranjan Jha</h4>
            <p>Engineer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "15rem", padding: "3px" }} src="https://www.liblogo.com/img-logo/re269re79-react-logo-react-logo-.png" alt="reactimg" />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Jayant Ranjan Jha</h4>
            <p>Engineer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "15rem", padding: "3px" }} src="https://www.liblogo.com/img-logo/re269re79-react-logo-react-logo-.png" alt="reactimg" />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Jayant Ranjan Jha</h4>
            <p>Engineer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "15rem", padding: "3px" }} src="https://www.liblogo.com/img-logo/re269re79-react-logo-react-logo-.png" alt="reactimg" />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Jayant Ranjan Jha</h4>
            <p>Engineer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "15rem", padding: "3px" }} src="https://www.liblogo.com/img-logo/re269re79-react-logo-react-logo-.png" alt="reactimg" />
          <div style={{ padding: "5px" , color: textColor}}>
            <h4>Jayant Ranjan Jha</h4>
            <p>Engineer</p>
          </div>
        </div>


      </div>


    </>
  )
}
export default App;