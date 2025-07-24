import { useState } from "react";

function App() {
  const [gender, setGender] = useState('Male')
const[city,setCity]=useState("Delhi")
  return (
    <>
      <h2>Handle Radio and Dropdown</h2>
      <h4>Select Gender</h4>

      <input onChange={(evt) => setGender(evt.target.value)} value={"Male"} type="radio" name="gender" id="male" checked={gender == 'Male'} />
      <label htmlFor="male">Male</label>
      <input onChange={(evt) => setGender(evt.target.value)} value={"Female"} type="radio" name="gender" id="female" checked={gender == 'Female'} />
      <label htmlFor="female">Female</label>
      <h3>Selected Gender : {gender}</h3>
<br /><br />

<h3>DropDown Select Option</h3>
<select onChange={(evt)=>setCity(evt.target.value)} defaultValue={"Delhi"} name="" id="">
<option value="Delhi">Delhi</option>
<option value="Noida">Noida</option>
<option value="Chennai">Delhi</option>
<option value="Gurgoan">Gurgoan</option>
</select>
<h3>Select City:{city}</h3>



    </>
  )
}


export default App;