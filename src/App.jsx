import React from "react";
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import"../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./footer";

import { Switch,Route,Redirect} from "react-router-dom";

import { Email } from "./Email";


const App =() =>{
  return(
    <>
   <Navbar/>
   <div style={{ minHeight: "calc(100vh - 180px)" }}>
    
    <Switch>
   
    <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/contact" component={Contact}/>
  
      <Route exact path="/Email" component={Email}/>
  <Redirect to="/"/>
  

    </Switch>
   
    </div>
 
    <Footer/>
    </>
  )
}
export default App;
