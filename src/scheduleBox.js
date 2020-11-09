import React from "react"
import "./style.css"


const Schedulebox =(props) =>{
    return(
        <div className="box">
           <div className="datebox" >
              <h3>{props.day} {props.month}</h3> 
           </div>
           <div className="contentbox">
              <p style={{fontWeight: "bold"}}>{props.title}</p>
              <p>{props.shr}:{props.smin} {props.stime} to {props.ehr}:{props.emin} {props.etime}</p>
              
           </div>
        </div>
    )
}

export default Schedulebox;