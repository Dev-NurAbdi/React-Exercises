// import { useEffect } from "react";
// import { useState } from "react";
import ChangingTitle from "../Exercise 06/ChangingTitle";
function App() {

// const [title,setTitle] = useState ("Hello, React")
// const [name,setName] = useState (" Nur")

// useEffect(()=>{
//     document.title = title ;
//     console.log(title)
// },[title])


 return (
  <div>
         <ChangingTitle/>
    {/* <h1>Enter  any Title  you want</h1>
    <input 
    type="text"
    onChange={(event)=> setName(event.target.value)}
    value={name}/>
    <input 
    type="text"
    onChange={(event)=> setTitle(event.target.value)}
    value={title}/> */}
   
  </div>
  )

      }
export default App;