import styled from "styled-components"

const Heading=styled.h1`
color:red;
border:1px solid black;
border-radius:5px;
margin:20px;
padding:10px
`;

const Heading1=styled.h1({color:'black',
border:'3px solid orange',
borderRadius:'5px',
margin:'20px',
padding:'10px',
display:'inline'
})

const StyleBtn=styled.button`
color:red;
width:130px;
height:40px;
margin:30px
`



function App(){

    return(
        <>

        <h1>Styled Components In react JS</h1>
        <Heading>Hello Heading</Heading>
        <Heading1>Hello Heading 1</Heading1> 
        <StyleBtn>Button1</StyleBtn>
        <StyleBtn>Button2</StyleBtn>

        </>



    )
}

export default App; 