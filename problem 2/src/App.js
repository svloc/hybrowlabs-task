import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {
  const data=['sachin','lokare','ABC',"XYZ"];
  const delete_name=(index)=>{
   data.splice(index,1);
  console.log(index)
  }
  return (
    <div className="container">
      <div className="pb-1">
       <button className="btn btn-black">Add +</button>
      </div>
     <div>
       <table>
         
           <thead>
         <tr>
           <th>Name</th>
           <th>Action</th>
         </tr>
         </thead>
         <tbody>
           {data.map((ele,index)=>{
            return(<tr key={index}>
              <td>{ele}</td>
              <td><button className="btn btn-red" type="button" onClick={()=>delete_name(index)}>Delete</button></td>
              </tr>)
            
           })}
           
           
           </tbody>
       </table>
     </div>
    </div>
  );
}
