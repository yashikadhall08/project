import React, { Component } from "react"
import { Redirect } from "react-router"

class FinalStep extends Component{
    state = {
        title: "",
        month:"",
        year: "",
        arr :[]
    }
    componentDidMount() {
        console.log(this.props.step.prevStep)
       
    }
    render(){
        const details = {
            title: this.props.state.title,
            year: this.props.state.year,
            month: this.props.state.month
        }
        this.state.arr.push(details)
        return(
           <div>
               {this.state.arr? this.state.arr.map(item =>{
                   return <li>{item.year}</li>
               }): null}
               <button onClick={<Redirect to="/" />}> Create new </button>
           </div>
        )
    }
}

export default FinalStep;