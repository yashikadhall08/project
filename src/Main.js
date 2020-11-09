import React from "react"
import {Link,withRouter} from "react-router-dom"
import { useQuery , useMutation } from "@apollo/react-hooks";
import ScheduleBox from "./scheduleBox"
 
import { gql } from "apollo-boost";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, Mutation, ApolloProvider, withApollo } from "react-apollo";
import Toolbar from "./Toolbar";


export const POST_SCHEDULE = gql`
{
  scheduleList(order_by: {title: asc}) {
    
      day
      ehr
      emin
      etime
      month
      shr
      smin
      stime
      title
      year
    
    }
  }
 `;



const MainStep = props =>{

   
    const { loading, error, data } = useQuery(POST_SCHEDULE);

    if (loading) return "Loading...";
    if (error) return console.log(error);
  
    
    
       return(  
        <div>
            <Toolbar heading="Schedules" />
            <Link to="/step"><button>CREATE NEW</button></Link>
           {data.scheduleList.map((item,index) =>{
               return <ScheduleBox key={index} day={item.day} month={item.month} shr={item.shr} smin={item.smin} stime={item.stime} ehr={item.ehr} 
                       emin={item.emin} etime={item.etime} title={item.title} /> 
           })}
            
        </div>
    )
    
   
}

export default (withRouter,withApollo)(MainStep);