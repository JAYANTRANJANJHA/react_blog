import User from "./User"

function App() {


  return (

    <>

      <h1>Style with CSS Module In React</h1>
      <div style={{display:"flex",flexWrap:"wrap"}}>
        <User/><User/><User/><User/><User/><User/><User/><User/><User/><User/>
      </div>
    

    </>
  )
}
export default App;



import style from './css/user.module.css'



function User() {


    return (
        <>
       
            <div className={style.card} >
                <img className={style.img} src="src\assets\sweimg.png" alt="pc" />
                <div className={style.textWrap}>
                    <h4>Jayant Ranjan Jha</h4>
                    <p>Software Engineer</p>
                </div>
            </div>



        </>
    )
}

export default User;



.img{
    width: 200px;
}

.card{
    border: 1px solid #ddd ;
    width: 200px;
    margin: 10px;
    box-shadow: 1px 1px 3px 1px #ddddddd8;
}

.textWrap{
    padding: 10px;
    
}