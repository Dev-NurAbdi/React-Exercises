import { useReducer } from "react"
const initialState = {
    counterA: 0,
    counterB: 0,
}
const reducer = (state,action) => {
    switch(action.type){
        case "-A":
            return {...state, counterA: state.counterA -1}
        case "+A":
            return {...state, counterA: state.counterA +1}
        case "-B":
            return {...state, counterB: state.counterB -1}
        case "+B":
            return {...state, counterB: state.counterB +1}
        case "ResetBoth":
            return initialState;
        default:
            return state;
    }
}
const DoubleCounter = ()=>{
const [state, dispatch] = useReducer(reducer,initialState)
    return(
        <div>
            <h2>CounterA: {state.counterA}</h2>
              <button onClick={()=> dispatch({type: "-A"})}>-A</button>
              <button onClick={()=> dispatch({type: "+A"})}>+A</button>
            <h2>CounterB: {state.counterB}</h2>
            <button onClick={()=> dispatch({type: "-B"})}>-B</button>
            <button onClick={()=> dispatch({type: "+B"})}>+B</button> <br />
            <button onClick={()=> dispatch({type: "ResetBoth"})}>Reset Both</button>
        </div>
    )
}
export default DoubleCounter;