import React, { useState } from "react"
import {withRouter} from "react-router-dom"
import {ApolloProvider, withApollo } from "react-apollo";
import {useMutation } from "@apollo/react-hooks";
import {SUBMIT_SCHEDULE} from "./query"
import{POST_SCHEDULE} from "./Main"
import {ApolloClient, InMemoryCache, HttpLink} from "apollo-boost"
import Auxillary from "./Auxilary";
import Toolbar from "./Toolbar";




const MasterForm = (props) =>{

    const httpLink = new HttpLink({
        uri: "https://scheduleapp.hasura.app/v1/graphql"
      });
      
      
      const client = new ApolloClient({  
        link: httpLink,
        cache: new InMemoryCache(),
        
      
        });
   
        const [title, setTitle] = useState("")
        const [day, setDay] = useState("")
        const [month, setMonth] = useState("")
        const [year, setYear] = useState("")
        const [shr, setShr] = useState("")
        const [smin, setsmin] = useState("")
        const [stime, setstime] = useState("")
        const [ehr, setehr] = useState("")
        const [emin, setemin] = useState("")
        const [etime, setetime] = useState("")
        

        const [currentStep , setcurrentStep] = useState(1)
      function  handleChange  (event)  {
            const {name, value} = event.target
           switch(name){
             case "title":
               setTitle(value);
               break;
             case "day":
               setDay(value);
               break; 
             case "month":
               setMonth(value);
               break; 
             case "year":
               setYear(value)
               break;
             case "shr":
               setShr(value)
               break;
             case "smin":
               setsmin(value)
               break;
             case "stime":
               setstime(value)
               break;
             case "ehr":
               setehr(value)
               break;
             case "emin":
               setemin(value);
               break;
             case "etime":
               setetime(value)  
               break;    


           } 
          }
          
         
          
          function nextButton  () {
            let curStep = currentStep;
            if(curStep <3){
              return (
                <button style={{float: "right"}} 
                  type="button" onClick={_next}>
                Next
                </button>        
              )
            }
            return null;
          }

         function _next  ()  {
            let curStep = currentStep
            curStep = curStep >= 2? 3: curStep + 1
            setcurrentStep(curStep)
          }
            
        
          

        const [submitSchedule] = useMutation(SUBMIT_SCHEDULE);
        
        return (
            <ApolloProvider client={client}>
            <div>
                <form onSubmit={e =>{
                    e.preventDefault();
                    submitSchedule({
                        variables:{title,day,month,year,shr,smin,stime,ehr,emin,etime},
                        refetchQueries:[{query : POST_SCHEDULE}]
                    })
                    console.log("submitted")
                    props.history.push("/")
                }
                    
                }>
                   <Step1 
            currentStep={currentStep} 
            handleChange={handleChange}
            title={title}
            day={day}
            month={month}
            year={year}
          />
          <Step2 
            currentStep={currentStep} 
            handleChange={handleChange}
            shr={shr}
            smin={smin}
            stime={stime}
          />
          <Step3 
            currentStep={currentStep} 
            handleChange={handleChange}
            ehr={ehr}
            emin={emin}
            etime={etime}
          />
          
          {nextButton()}
                </form>
            </div>
            </ApolloProvider>
        )



}


  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <Auxillary>
      <Toolbar heading="New Schedule Step-1" />
      <div className="form-group">
        
        <label htmlFor="title"><h3>Title</h3></label>
        <textarea cols="40"
          className="form-control"
          id="title"
          name="title"
          type="text"
        
          value={props.title}
          onChange={props.handleChange}
          />
          <h3>Date</h3>

          <div style={{display: "flex"}}>
            <div style={{margin: "10px"}}>
            <label htmlFor="day"><p>Day</p></label>
            <textarea cols="10"
             name="day"
             type="text"
             value={props.day}
             onChange={props.handleChange}
            />
            </div>
            <div style={{margin: "10px"}}>
            <label htmlFor="month"><p>Month(in letters)</p></label>
            <textarea cols="10"
             name="month"
             type="text"
             value={props.month}
              onChange={props.handleChange}
            />
            </div>
            <div style={{margin: "10px"}}>
            <label htmlFor="year"><p>Year</p></label>
            <textarea cols="10"
             name="year"
             type="text"
             value={props.year}
             onChange={props.handleChange}
            />
            </div>

          </div>         
          
      </div>
      </Auxillary>
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <Auxillary>
      <Toolbar heading="New Schedule Step-2" />
      <div className="form-group">
            <h3>Start Time</h3>
            <div style={{display: "flex"}}>
               <div style={{margin: "10px"}}>
               <label htmlFor="shr"><p>Hour</p></label>
               <textarea cols="10"
               className="form-control"
               id="shr"
               name="shr"
               type="shr"        
               value={props.shr}
               onChange={props.handleChange}
               />
               </div>
               <div style={{margin: "10px"}}>
               <label htmlFor="smin"><p>Min</p></label>
               <textarea cols="10"
               className="form-control"
               id="smin"
               name="smin"
               type="text"     
               value={props.smin}
               onChange={props.handleChange}
              />
               </div>
               <div style={{margin: "10px"}}>
               <label htmlFor="stime"><p>AM/PM</p></label>
               <textarea cols="10"
               className="form-control"
               name="stime"
               type="text"    
               value={props.stime}
               onChange={props.handleChange}
                />
               </div>
            </div>
           
          
          
      </div>
      </Auxillary>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <Auxillary>
      <Toolbar heading="New Schedule Step-3" />

      <div className="form-group">
        <h3>END TIME</h3>
        <div style={{display: "flex"}}> 

          <div style={{margin: "10px"}}>
          <label htmlFor="ehr"><p>HOUR</p></label>
          <textarea cols="10"
          className="form-control"
          id="password"
          name="ehr"
          type="text"
          value={props.ehr}
          onChange={props.handleChange}
          />   

          </div>
          <div style={{margin:"10px"}}>
          <label htmlFor="emin"><p>MIN</p></label>
          <textarea cols="10"
          className="form-control"
          id="username"
          name="emin"
          type="text"    
          value={props.emin}
          onChange={props.handleChange}
          />
          </div>
          <div style={{margin: "10px"}}>
                
          <label htmlFor="etime"><p>AM/PM</p></label>
          <textarea cols="10"
          className="form-control"
          id="username"
          name="etime"
          type="text"
    
          value={props.etime}
          onChange={props.handleChange}
          />   
          </div>

        </div>
        
        
      </div>
      <button style={{float: "right"}}>CREATE</button>
      </Auxillary>
    );
  }

  export default (withRouter,withApollo)(MasterForm);