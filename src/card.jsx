import React from "react";
import web from "../src/image/S.jpg";
import { NavLink } from "react-router-dom"; // Use "react-router-dom" instead of "react-browser-router"

const Card = (props) => {
  
  const cardStyle = {
    width: props.width || "400px", // Default width is 250px, but you can provide a custom width through props
    height: props.height || "800px", // Default height is 400px, but you can provide a custom height through props
  };

  return (
    
    <div className="col-md-4 col-10 mx-auto">
      <div className="card" style={cardStyle}>
        <img
          src={props.imgsrc}
          className="card-img-top"
          alt={props.imgsrc}
         
        />
         <div className="card-footer"></div>
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{props.title}</h5>
          <p className="card-text"><b>{props.des}</b></p>
          
          <NavLink to="/Email" className="btn btn-dark">
            {props.btnname}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
