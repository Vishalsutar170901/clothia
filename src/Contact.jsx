import React, { useState } from "react";
import bannerImage from"../src/image/banner.png";
import bannerImage1 from"../src/image/banner2.jpg";
const Contact = () => {

  return (
    <>
    <div className="my-5 men-section">
        <h1 className="text-center">"Our products"</h1>
      </div>
       <div className="banner-container">
      <div className="banner">
        <img src={bannerImage} alt="Advertisement" className="banner-image" />
      </div>
      
    </div>
    <div className="banner">
        <img src={bannerImage1} alt="Advertisement" className="banner-image" />
      </div>
    <div>
      
    </div>

    </>
  );
};

export default Contact;
