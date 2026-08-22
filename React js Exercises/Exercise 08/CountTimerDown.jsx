import { useEffect, useState } from "react";

const CountTimerDown = ()=>{
    const [time,setTime] = useState (0);
    const [inputTime, setInputTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
useEffect(() => {
  let timerId;

  if (isRunning) {
    timerId = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }
  return () => clearInterval(timerId);
}, [isRunning]);

const handleStart = ()=>{
    setTime(Number (inputTime))
    setIsRunning(true)
}
const handleStop = ()=>{
  setIsRunning (false)
}

const handleReset = ()=>{
  setIsRunning(false);
  setTime(0);
}
    return(
        <div>
            <h2>CountDown Timer</h2>
            <p>Set Time (Seconds):      
            <input type="number" 
            value={inputTime}
            onChange={(event)=> setInputTime(event.target.value)}/></p>
            <p>Time Left <b>{time}</b> Seconds: </p>
            <button  disabled= {isRunning}  onClick={handleStart }>Start</button>
            <button disabled = {!isRunning} onClick={handleStop}>Stop</button>
           <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default CountTimerDown;