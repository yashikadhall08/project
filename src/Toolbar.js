import React from "react"
import "./style.css"

const Toolbar = (props) =>{
    return(
       <div className="toolbar">
           <h1>{props.heading}</h1>
       </div>
    )
}

export default Toolbar;

