import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Nav from "./components/Nav";
import Index from "./components/Index";
import Actualizar from "./components/Actualizar";



function App() {
  return (
   <Router>
     <Nav/>
     <Route path='/' exact component={Index}/>
     <Route path='/editar/:id' component={Actualizar}/>
   </Router>
  );
}

export default App;
