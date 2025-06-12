import { useContext } from "react";
import { mycontext } from "./Usercontext";
const Cybrom = () => {
    const {name}= useContext(mycontext)
  return (
    <>
    <h1>welcome to Cybrom {name}</h1>
   

    
    </>
  );
}

export default Cybrom;
