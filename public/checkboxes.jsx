import { useState } from "react";

function Checkboxes(){
    const [skill,setSkill]=useState([]);
    const handleSkill=(evt)=>{
        console.log(evt.target.value,evt.target.checked);
        if(evt.target.checked){
            setSkill([...skill,evt.target.value])

        }else{
            setSkill([...skill.filter((item)=>item!=evt.target.value)])
        }

    }


    return(
        <>
        <h3>Select Your Skills</h3>
        <input onChange={handleSkill} type="checkbox" name="" id="react" value="React" />
        <label htmlFor="react">React</label>
        <br />
        <input onChange={handleSkill} type="checkbox" name="" id="js" value="JS" />
        <label htmlFor="js">JS</label>
        <br />
        <input onChange={handleSkill} type="checkbox" name="" id="node" value="Node" />
        <label htmlFor="node">Node</label>
        <br />
        <input  onChange={handleSkill} type="checkbox" name="" id="python" value="Python" />
        <label htmlFor="python">Python</label>
        <br />
        <h3>{skill}</h3>

        </>
    )
}
export default Checkboxes;