import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Nav from "./components/Nav";
import Index from "./components/Index";



function App() {
  return (
   <Router>
     <Nav/>
     <Route path='/' exact component={Index}/>
   </Router>
  );
}

export default App;
