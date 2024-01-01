import React from "react";
import web from "../src/image/wdress.png";
import bannerImage1 from"../src/image/banner3.png";
import bannerImage2 from"../src/image/banner4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Common from "./Common";
import './About.css'; // Create a CSS file for custom styling if needed

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Common 
        name="Dress Your Best Life"
        name1="Fashion is about dressing according to what’s fashionable. Style is more about being yourself "
        imgsrc={web} 
        visit="/contact"
        btname="Products"
      />
      <Slider {...settings}>
        <div>
          <img src={bannerImage1} alt="Banner 1" className="banner-image" />
        </div>
        <div>
          <img src={bannerImage2} alt="Banner 1" className="banner-image" />
        </div>
        {/* Add more <div> elements with additional banner images */}
      </Slider>
    </>
  );
};

export default About;
