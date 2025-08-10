import { useReducer } from "react";


const emptyData={
    name:'',
    password:'',
    email:'',
    city:'',
    address:''
}

const reducer=(data,action)=>{
    return{...data,[action.type]:action.val}
}
function App(){
const[state,dispatch]=useReducer(reducer,emptyData);
console.log(state);
    return(
        <>
        <h1>useReducer Hook</h1>
        <br /><br />
        <input type="text" onChange={(evt)=>dispatch({val:evt.target.value,type:'name'})} placeholder="Enter " />
        <br /><br />
        <input type="text" onChange={(evt)=>dispatch({val:evt.target.value,type:'password'})} placeholder="Enter password" />
        <br /><br />
        <input type="text" onChange={(evt)=>dispatch({val:evt.target.value,type:'email'})} placeholder="Enter email " />
        <br /><br />
        <input type="text" onChange={(evt)=>dispatch({val:evt.target.value,type:'city'})} placeholder="Enter city" />
        <br /><br />
        <input type="text" onChange={(evt)=>dispatch({val:evt.target.value,type:'address'})} placeholder="Enteraddress " />
        <br /><br />

        <ul>
            <li>Name : {state.name}</li>
            <li>Password : {state.password}</li>
            <li>Email : {state.email}</li>
            <li>City : {state.city}</li>
            <li>Address : {state.address}</li>
        </ul>



    <button onClick={()=>console.log(state)}>Add Details</button>
        </>

    )
}

export default App;