import React from "react";
import {ApolloClient, InMemoryCache, HttpLink} from "apollo-boost";
import {ApolloProvider, withApollo} from "react-apollo"

import MasterForm from "./MasterForm"
import { Route, Switch,withRouter } from "react-router-dom";
import Main from "./Main"




function App() {

  const httpLink = new HttpLink({
    uri: "https://scheduleapp.hasura.app/v1/graphql"
  });
  
  
  const client = new ApolloClient({  
    link: httpLink,
    cache: new InMemoryCache(),
    
  
    });
  return (
    <div className="App">
    <ApolloProvider  client={client}>
     <Switch>
     <Route path="/" exact component={Main} />
       <Route path="/step" exact component={MasterForm} />
      

     </Switch>
     </ApolloProvider>
    </div>
  );
}

export default (withRouter,withApollo)(App);
