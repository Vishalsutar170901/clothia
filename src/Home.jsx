import React from "react";
import web from "../src/image/h1.png";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Common from "./Common";
import LogoImage from "../src/image/clothia.png";

const Home = () => {
  return (
   
      <>
      <Common 
      name="WELCOME TO THE CLOTHIA "
      name1="Style Meets Comfort"
      imgsrc={web} 
      visit="/Service"
      btname="SHOP NOW!"
      
      />
      
    </>
   
  );
};

export default Home;
