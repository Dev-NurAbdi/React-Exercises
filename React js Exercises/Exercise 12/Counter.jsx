const Counter = ()=>{
    
    
const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
    return(
 <div>
      <h1>Count: {count}</h1>
      <button
        onClick={handleDecrement}
        disabled={count === 0}> Decrement </button>
      <button onClick={handleIncrement}> Increment </button>
</div>
    )
}
export default Counter;