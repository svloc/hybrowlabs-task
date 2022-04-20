import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {
  const data=['sachin','lokare','ABC',"XYZ"];
  return (
    <div className="container">
      <div className="pb-1">
       <button className="btn btn-black">Add +</button>
      </div>
     <div>
       <table>
         <tr>
           <th>Name</th>
           <th>Action</th>
         </tr>
         <tr>
           <td>sachin</td>
           <td><button className="btn btn-red">Delete</button></td>
         </tr>
         <tr>
           <td>lokare</td>
           <td><button className="btn btn-red">Delete</button></td>
         </tr>
       </table>
     </div>
    </div>
  );
}
