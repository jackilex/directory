import React, { useState } from "react";
import employees from "./employees.json"
import Navbar from "./components/Navabar"
import Tag from "./components/Tag"
import Filter from "./components/Filter"
import Sort from "./components/Sort"
import "./style.css"


const App = () => {

const [users, setUsers]= useState(employees);
const [sorted,setSorted]=useState("az")
let sortThemBy;


//using last save soted format for the handle change event
switch (sorted){
  case "az":
    sortThemBy= alpha
    break;
    case "za":
      sortThemBy= deAlpha
    break;
    case "id":
      sortThemBy= idRanging
    break;
    case "rank":
      sortThemBy= ranking
    break;
}


//fitering by department
const handleChange=async (e) => {
  
let value=e.currentTarget.value;
if(value ==='all'){
  sortThemBy(employees);
  return setUsers(employees)
}
let byDpt=await employees.filter(worker => worker.department === value)
sortThemBy(byDpt);
setUsers(byDpt);

console.log(sorted)
};


//fucntions to run for sorting and filtering
const handleSort= (e) =>{

let sorting= e.target.value;
if(sorting==="az")
{
  alpha(users);
}else if(sorting==="za"){
  deAlpha(users)
}else if(sorting==="rank"){
  ranking(users)
}else if(sorting==="id"){
  idRanging(users)
}

setSorted(sorting)
}

async function alpha(data){

  let mySort=await [...data].sort( function(a,b){
    let nameA=a.name.toLowerCase();
    let nameB=b.name.toLowerCase()
    if (nameA<nameB) {
      return -1
    }
    if (nameA>nameB) {
      return 1
    }
    return 0
  })
  
  setUsers(mySort);
  
}

async function deAlpha(data){

  let mySort=await [...data].sort( function(a,b){
    let nameA=a.name.toLowerCase();
    let nameB=b.name.toLowerCase()
    if (nameA<nameB) {
      return 1
    }
    if (nameA>nameB) {
      return -1
    }
    return 0
  })
  
  setUsers(mySort);
  return sortThemBy= deAlpha;
}

async function idRanging(data){

  let mySort=await [...data].sort( function(a,b){
    let nameA=a.id;
    let nameB=b.id
    if (nameA<nameB) {
      return -1
    }
    if (nameA>nameB) {
      return 1
    }
    return 0
  })
  
  setUsers(mySort);
 
}

async function ranking(data){

  let mySort=await [...data].sort( function(a,b){
    let nameA=a.rank;
    let nameB=b.rank
    if (nameA<nameB) {
      return -1
    }
    if (nameA>nameB) {
      return 1
    }
    return 0
  })
  
  setUsers(mySort);
 
}
  return ( 
  <div>
  <Navbar />
  <div className="container">
  <Filter onChange={handleChange}/>
  <Sort onChange={handleSort}/>
  </div>
  
   <div style={{display:"flex", flexWrap:" wrap"}}>
   {users.map(employee => (
    <Tag 
    id={employee.id}
    key={employee.id}
    name={employee.name}
    role={employee.role}
    image={employee.image}
    email={employee.email}
    />
   ))}
   </div>
   </div>
    );
}
 
export default App;

