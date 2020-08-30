import React from "react"


const Tag = (props) => {
    return (
<div className="card text-white bg-primary mb-3 mr-4 mt-5" style={{width: "18rem"}}>
    <img src={props.image} className="card-img-top" alt={props.name}/>
    <div className="card-body">
    <h5 className="card-title">Name: {props.name} <br/> Role: {props.role}</h5>
    <h5 className="card-text">ID: {props.id} <br/> Email: {props.email}</h5>
    </div>
</div>
    );
}
 
export default Tag;