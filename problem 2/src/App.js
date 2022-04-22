import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {

  const data=['sachin','lokare','ABC',"XYZ"];
  let arr=[];
  const APL_URL='https://swapi.dev/api/people/';
  const [nameData,setNameData]=useState();
  const [loading,setLoading]=useState(false)

  const delete_name=()=>{
 
  }
  const get_name= ()=>{
   
      const min = 1;
      const max = 83;
      const random = Math.floor(min + (Math.random() * (max - min)));
      fetch(APL_URL+random).then(res=> res.json()).then(result=>{
        console.log(result.name)
        setNameData(result.name);
        arr.push(result);
        setLoading(true)
      })
      console.log('array',arr)
  }
  console.log(nameData);
 
  return (
    <div className="container">
      <div className="pb-1">
       <button className="btn btn-black" onClick={get_name}>Add +</button>
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
           {loading &&
           <>
           {arr.map(ele=>{
           return(<tr>
              <td>{ele.name}</td>
              <td><button className="btn btn-red" type="button" onClick={()=>delete_name()}>Delete</button></td>
              </tr>);
              
            })}
              </>
      
           }

           {!loading && <>
           <tr>No data there</tr>
            </>}
           
           </tbody>
       </table>
     </div>
    </div>
  );
}
