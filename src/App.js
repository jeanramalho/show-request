import React from "react";
import GlobalStyle from "./Styles/global";
import Router from "./Components/Router";
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
        <BrowserRouter>
        <Router />   
        <GlobalStyle />  
       </BrowserRouter>           
  
  );
}

export default App;