import { useEffect, useState } from "react";

const ChangingTitle = ()=>{


const [name,setName] = useState("");
const [greeting,setGreeting] = useState ("Hello")

useEffect(()=>{
    
    if(name === ""){
        document.title = "Welcome"
    }else{
        document.title = `${greeting} ${name}`
    }

},[name,greeting])

    return (
        <div>
            <h3>Enter Your Name</h3>
            <input 
            type="text"
            value={name}
            onChange={(event)=> setName (event.target.value)}/>

            <h3>Choose A Greeting</h3>
            <input 
            type="text" 
            value={greeting}
            onChange={(event)=> setGreeting (event.target.value)}/>
        </div>
    )
}
export default ChangingTitle;