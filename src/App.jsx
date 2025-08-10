export default function App(){

    return(
        <>
        <h1>Color Mixer</h1>

<div style={{backgroundColor:rgb(0,0,0) ,height:200, width:200}}>d</div>

        <label htmlFor="">Red</label>
        <input type="range" onChange={(evt)=>console.log(evt.target.value)} min={0} max={255} />
        <br /><br />
        <label htmlFor="">Green</label>
        <input type="range" min={0} max={255} />
        <br /><br />
        <label htmlFor="">Blue</label>
        <input type="range" min={0} max={255} />

        
        
        </>


    )

}

