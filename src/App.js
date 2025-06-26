import Data from "./Data";
import { useState } from "react";
import "./App.css";
const App=()=>{
  const [currentPage, setCurrentPage]= useState(1);
  const recordsPerPage=5;
  const lastIndex= currentPage*recordsPerPage;
  const firstIndex= lastIndex-recordsPerPage;
  const records= Data.slice(firstIndex, lastIndex);
  const npage= Math.ceil(Data.length/recordsPerPage);
  const numbers=[...Array(npage+1).keys()].slice(1);
  
  return(
    <>
     <h1> Pagination</h1>
     <table>
      <tr>
        <td> ID </td>
        <td>Name </td>
        <td> Email</td>
      </tr>
       { records.map((d, i)=>{
        return(
          <>
           <tr key={i}>
            <td> {d.ID} </td>
            <td> {d.name} </td>
            <td> {d.email} </td>
         </tr>
          </>
        )
        
       })
       }
     </table>
      <br/>
      <nav>
         <ul className="display">
          <li>
             <a href="#" onClick={prePage}> Pre </a>   
          </li>
         {
           numbers.map((n, i)=>(   
               <li className="mynum">
               <a href="#" onClick={()=>{changeCPage(n)}}>{n}</a>
              </li>
              ))
         }     
         <li style={{paddingLeft:"20px"}}>
           <a href="#" onClick={nextPage}> Next </a>
         </li>
         </ul>
      </nav>
    </>
  );




function prePage()
{
  if(currentPage!==1)
  {
    setCurrentPage(currentPage-1);
  }
}

function changeCPage(id)
{
  setCurrentPage(id)
}

function nextPage()
{
   if (currentPage!==npage )
   {
    setCurrentPage(currentPage+1);
   }
}

}
export default App;