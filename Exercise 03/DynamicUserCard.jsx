const DynamicUserCard = (props)=>{
    console.log(props)
    return(
        <div>
            <h1>Your name is: {props.CurrentName} </h1>
            <p>Your Email is : {props.CurrentEmail}</p>
        </div>
    )
}
export default DynamicUserCard;