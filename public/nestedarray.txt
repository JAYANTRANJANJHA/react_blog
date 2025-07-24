import { useState } from "react";
import College from "./College";
function App() {
  const collegeData=[
    {name:"IET Alwar",
    city:"Alwar",
  website:"iet.com",
  student:[
    {name:"jrj",
      age:'22',
      email:"jrj@gmail.com"
    },
    {name:"mrj",
      age:'26',
      email:"mrj@gmail.com"
    },
    {name:"mkj",
      age:'55',
      email:"mkj@gmail.com"
    },
  ]
},
  {name:"IIT Delhi",
    city:"Delhi",
  website:"iitdelhi.com",
  student:[
    {name:"jrj",
      age:'22',
      email:"jrj@gmail.com"
    },
    {name:"mrj",
      age:'26',
      email:"mrj@gmail.com"
    },
    {name:"mkj",
      age:'55',
      email:"mkj@gmail.com"
    },]

},
  {name:"JIMS GN",
    city:"GN",
  website:"Jims.com",
  student:[
    {name:"jrj",
      age:'22',
      email:"jrj@gmail.com"
    },
    {name:"mrj",
      age:'26',
      email:"mrj@gmail.com"
    },
    {name:"mkj",
      age:'55',
      email:"mkj@gmail.com"
    },]
},
  ]
  return (
    <>
      <h3>Nested Looping  </h3>
      {
        collegeData.map((college,index)=>(
          <div key={index} >
            <College college={college}/>
          </div>
        ))
      }
    </>
  )
}
export default App;



import Student from "./Student"

const College = ({ college }) => {
    return (
        <div style={{
            backgroundColor: "#ffe5d9",
            color: "#e76f51",
            padding: "20px",
            borderBottom: "2px solid black",
            margin: "20px",
            borderRadius: "10px"
        }}>
            <h3>Name : {college.name} </h3>
            <ul>
                <li>
                    <h3>
                        City :{college.city}
                    </h3>
                </li>
                <li>
                    <h3>
                        WebSite : {college.website}
                    </h3>
                </li>
                <li>
<Student student={college.student} />
                </li>
            </ul>




        </div>
    )
}
export default College


const Student = ({ student }) => {

    return (
        <>
            <h3>Students</h3>
            {
                student.map((student) => (
                    <ul>
                        <li>Names : {student.name}</li>
                    </ul>
                ))
            }

        </>
    )
}
export default Student;
