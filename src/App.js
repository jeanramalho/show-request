import React from "react";
import GlobalStyle from "./Styles/global";
import Router from "./components/Router";
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    

     <ApolloProvider client={client}>
        <BrowserRouter>
        <Router />   
        <GlobalStyle />  
       </BrowserRouter>          
    </ ApolloProvider>
    
        
  
  );
}

export default App;