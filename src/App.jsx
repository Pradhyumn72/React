import { useState,useEffect } from "react";

const App=()=>{
  const[myval,setMyval]=useState(0)
  useEffect(()=>{
    setTimeout(() => {
      setMyval(myval+1)
    }, 2000);
   
  })

  return(

    <>
    <h1>Welcome to my app: {myval}</h1>
    
    </>
  )

}

  
  


export default App;


