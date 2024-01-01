import React from "react";
import web from "../src/image/img1.jpg";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import index from "./index";

const Common= (props) => {
 
  return (
    <section id="header"className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row justify-content-center">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  {props.name}
                  
                </h1>
                <h2 className="my-3">
                
                {props.name1}
                 
                </h2>
                <div className="mt-3">
                <Nav.Link
                    as={Link}
                    to={props.visit}
                    className="btn btn-dark btn-get-started menu_active "
                    style={{
                      fontSize: "18px",
                      padding: "10px 10px",
                      width: "200px", // Adjust width
                      height: "50px", // Adjust height
                     
                      borderRadius: "40px", // Add border radius for curve
                      fontWeight: "bold", // Set font weight to bold
                      fontFamily: "Bungee Inline", // Set Google Font "Bungee Inline"
                      cursor: "pointer", // Add hand cursor
                      backgroundColor: "#1C2833", // Set background color
                      color: "#FFFFFF", 
                    }}
                  >
                  {props.btname}
                  </Nav.Link>
                  
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <img src={props.imgsrc} className="img-fluid animated-image" alt="home img" />
                
              </div>
              <div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Common;
