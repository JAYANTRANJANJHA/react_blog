
import { useState } from 'react'
import './App.css'

export default function App() {

    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState('');

     const [password, setpassword] = useState('');
    const [passErr, setPassErr] = useState('');

    const handleName=(evt)=>{
        console.log(evt.target.value)
        if(evt.target.value.length>20){
          setNameErr("Max Char Limit Exceeded")  
        }else{
            setNameErr()
        }
    }

    const handlePassword=(evt)=>{
        let regex=/^[A-Z0-9a-z]+$/i;
        if(regex.test(evt.target.value)){
            setPassErr()
        }else{
            setPassErr("No Special character Allowed")
            
        }
    }
    return (
        <>

            <div>
                <input className={nameErr?'error':''} type="text" onChange={handleName} placeholder='Name' />
                <span>{nameErr && nameErr}</span>
                <br /><br />
                <input className={passErr?'error':''} type="text" placeholder='Password' onChange={handlePassword} />
                <span>{passErr && passErr}</span>
                <br /><br />
                <button disabled={passErr||nameErr}>Login</button>
                <br /><br />

            </div>

        </>

    )
}



