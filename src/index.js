import React from "react"
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import App from "./App"
import {ApolloProvider, withApollo} from "react-apollo"

import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'

import {ApolloClient, InMemoryCache, HttpLink} from "apollo-boost";

const httpLink = new HttpLink({
  uri:  "https://scheduleapp.hasura.app/v1/graphql"
});


const client = new ApolloClient({  
  link: httpLink,
  cache: new InMemoryCache(),
  

  });

  function Root (){
    return(
      <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ApolloHooksProvider>
    </ApolloProvider>
    )
    
     
  }

ReactDOM.render(
  
    <Root />
    
  
  

  ,
  document.getElementById('root')
);


