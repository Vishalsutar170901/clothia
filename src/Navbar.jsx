import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoImage from "../src/image/clothia.png";

const CustomNavbar = () => {
  
  return (
    <>
    
     <div className="container-fluid nav_bg navbar-shadow">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1"></div>
      <Navbar expand="lg" bg="body-tertiary">
        
        <Navbar.Brand as={Link} to="/">
       
        <img
                  src={LogoImage}
                  alt="Your Logo"
                  width="250"
                  height="auto"
                  className="d-inline-block align-top"
                />
       
       </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse className="justify-content-end" id="navbarSupportedContent">
          <Nav className="ml-auto mb-2 mb-lg-0">
          
            <Nav.Item>
           
              <Nav.Link as={Link} to="/" activeClassName="menu_active" exact>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link as={Link} to="/about" activeClassName="menu_active">
            Fashion
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link as={Link} to="/service" activeClassName="menu_active">
               clothing
              </Nav.Link>
              
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact" activeClassName="menu_active">
             Products
              </Nav.Link>
            </Nav.Item>
           
            <Nav.Item>
              <Nav.Link as={Link} to="/Email" activeClassName="menu_active">
                Order
              </Nav.Link>
            </Nav.Item>
          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
        </div>
      </div>
    </>
    
  );
};

export default CustomNavbar;
