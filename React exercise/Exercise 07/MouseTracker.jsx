import { useEffect,useState } from "react";

const MouseTracker = ()=>{


const [coords,setCoords] = useState({x:0, y:0})

        useEffect(()=>{
            const handleMouseMove = (event)=>{
                setCoords({x: event.x, y: event.y})
            }
            window.addEventListener("mousemove", handleMouseMove )
        // CLEAN UP
        return()=> {
            window.removeEventListener("mousemove", handleMouseMove)
        }
        },[])
    return(
        <div>
        <p>Mouse X: {coords.x}</p>
       <p>Mouse Y: {coords.y}</p>
        </div>
    )
}
export default MouseTracker;