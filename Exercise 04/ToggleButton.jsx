import { useState } from "react"

const ToggleButton = ()=>{

    const [isOn, setIsOn] = useState(true)
        const Turn = ()=>{
            setIsOn(!isOn)
        }

    return(
        <div>
            <p>The Button is : {isOn ? "ON" : "OFF"}</p>
            <button onClick={Turn}>Turn {isOn ? "OFF" : "ON"}</button>
        </div>
    )
}
export default ToggleButton;