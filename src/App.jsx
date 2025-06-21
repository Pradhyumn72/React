import { bgcolorChange } from "./Colorslice";
import { useDispatch, useSelector } from "react-redux";
import { use, useState } from "react";


const App = () => {
  const clr=useSelector(state=>state.mycolor.color)
  const dispatch=useDispatch("")
  const[txtval,setTxtval]=useState("")
  
  return (
    <>
    enter color: <input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}}/>

  <button onClick={()=>{dispatch(bgcolorChange(txtval))}}>click here</button>
  <div style={{width:"200px",height:"200px", backgroundColor:clr}}></div>
    </>
  );
};

export default App;
