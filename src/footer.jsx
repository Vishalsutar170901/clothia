import React from "react";
import Home from "./Home";
import LogoImage from "../src/image/clothia.png";
const Footer=()=>{
    return(
        <>
        <center>
        <footer className="w-100 bg-light text-center"></footer>
        <p></p>
    
        </center>
        <footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>pune</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>9021881350</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>clothia@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                            <a href="index.html"><img src={LogoImage} class="img-fluid" alt="logo"/></a>
                            </div>
                            <div class="footer-text">
                                <p>Step into the world of Clothia, where every stitch weaves stories of elegance and sophistication. Embrace the rhythm of fashion with our curated collection, designed to elevate your style quotient. </p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Links</h3>
                            </div>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Fashion</a></li>
                                <li><a href="">clothing</a></li>
                                <li><a href="">portfolio</a></li>
                                <li><a href="">Products</a></li>
                                <li><a href="">Order</a></li>
                                <li><a href="#">Our Services</a></li>
                              
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                               
                            </div>
                            <div class="footer-text mb-25">
                            <p>Created By vishal sutar</p>
                            </div>
                            <div class="subscribe-form">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>@2023 Devwithvishal.All Rights Resvered | Terms and condition <a href="https://portfoliovishalsutar.netlify.app/">vishal</a></p>
                        </div>
                        <div>
                      
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href={Home}>Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="9021881350">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}
export default Footer;