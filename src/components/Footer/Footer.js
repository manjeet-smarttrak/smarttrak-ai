import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-off-white footer">
            <div className="footer-shapes">
                <div className="footer-shape">
                    <img src="images/index/shape-1.png" alt="shape"/>
                </div>
                <div className="footer-shape footer-round-shape">
                    <img src="images/index/shape-2.png" alt="shape"/>
                </div>
            </div>

            <div className="footer-upper pt-100 pb-80 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="footer-content-item">
                                <div className="footer-logo">
                                    <Link to="/" onClick={() => {window.location.href="/"}}>
                                        <img src="images/index/logo.png" alt="logo" className="logo logo-image"/></Link>
                                </div>
                                <div className="footer-details">
                                    <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec
                                        sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.</p>
                                    <ul className="social-list social-list-btn">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i className="mdi mdi-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i className="mdi mdi-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" target="_blank"><i className="mdi mdi-youtube"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="footer-content-list footer-content-item desk-pad-left-70">
                                <div className="footer-content-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul className="footer-details footer-list">
                                    <li>
                                        <a><Link to="/aboutus">About Us</Link></a>
                                    </li>
                                    <li>
                                        <a><Link to="/career">Career</Link></a>
                                    </li>
                                    <li>
                                        <a><Link to="/service">Services</Link></a>
                                    </li>
                                    <li>
                                        <a><Link to="/contact">Contact Us</Link></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4">
                            <div className="footer-content-list footer-content-item desk-pad-left-70">
                                <div className="footer-content-title">
                                    <h3>Contact</h3>
                                </div>
                                <div className="footer-details footer-address">
                                    <div className="footer-address-item">
                                        <div className="footer-address-text">
                                            <h4>Phone:</h4>
                                            <p><a href="tel:001-987-654-432">(+91) 40 4868 4455</a></p>
                                        </div>
                                    </div>
                                    <div className="footer-address-item">
                                        <div className="footer-address-text">
                                            <h4>Email:</h4>
                                            <p><a href="mailto:info@erudex.com">info@smarttrak.com</a></p>
                                        </div>
                                    </div>
                                    <div className="footer-address-item">
                                        <div className="footer-address-text">
                                            <h4>Address:</h4>
                                            <p>H.No.1-90/2/10/E, Ground Floor, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana - 500081, INDIA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-lower bg-blue position-relative">
                <div className="container">
                    <div className="footer-copyright-text footer-copyright-text-white">
                        <p>Copyright ©2021 Smarttrak. Designed &amp; Developed By <a href="#"
                                                                                     target="_blank">Smarttrak</a></p>
                    </div>
                </div>
            </div>

            <div className="scroll-top scrolltopactive" id="scrolltop">
                <div className="scroll-top-inner">
                    <i className="mdi mdi-arrow-up"></i>
                </div>
            </div>

            {/*<div className="search-overlay">
                <div className="search-close">
                    <i className="mdi mdi-close"></i>
                </div>
                <div className="search-form-area">
                    <div className="search-area-logo">
                        <a href="https://templates.envytheme.com/erudex/default/index.html">
                            <img src="images/index/logo-white.png" alt="logo" className="logo logo-image"/>
                        </a>
                    </div>
                    <form>
                        <div className="form-group search-form-group">
                            <input type="text" placeholder="Search..." className="form-control" autoFocus="autofocus"/>
                            <button>
                                <i className="mdi mdi-magnify"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>*/}
        </footer>
    );
};

export default Footer;
