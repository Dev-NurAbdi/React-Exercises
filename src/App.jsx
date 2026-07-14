// import Layout from "./Layout";
// import Blog  from "../Exercise 02/Blog";
// import Greeting from "./Greeting";

import DynamicUserCard from "../Exercise 03/DynamicUserCard";

function App() {

    // const CurrentUser = "salax";
    // const role = "user"
  
    
  return (
    <>
      {/* <Layout /> */}
           {/* <Blog/> */}
     {/* <Greeting 
     CurrentUser = {"cali"}
     role={"admin"}/>
     <Greeting 
     CurrentUser = {"salax"}
     role={"student"}/> */}

          <DynamicUserCard 
          CurrentName = {"Nur abdi "}
          CurrentEmail = {"nurabdi@gmail.com"}/>

          <DynamicUserCard 
          CurrentName = {"Cali xasan"}
          CurrentEmail = {"Deo123@gmail.com"}/>

          <DynamicUserCard 
          CurrentName = {"Hamdi cali"}
          CurrentEmail = {"hamda2341@gmail.com"}/>
    </>
  );
}

export default App;