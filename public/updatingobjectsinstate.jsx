import { useState } from "react";


export default function App() {
 


const [data,setData]=useState({
    name:'jrj',
    address:{
        
        country:"India",
        city:"delhi",
    }
})

const handleName=(val)=>{
     data.name=val;
    setData({...data})
       
    }

    const handleCity=(city)=>{
        data.address.city=city;
        setData({...data,address:{...data.address,city}})

    }


    return (

        <>

<h2>Updating objects In State  : </h2>
<input type="text" placeholder="update name" 
onChange={(evt)=>handleName(evt.target.value)}/>

<input type="text" placeholder="update city" 
onChange={(evt)=>handleCity(evt.target.value)}/>
<h3>Name : {data.name}</h3>
<h3>City : {data.address.city}</h3>
<h3>Country : {data.address.country}</h3>


        </>

    )
}

