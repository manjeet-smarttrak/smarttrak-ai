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
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="footer-content-item">
                                <div className="footer-logo">
                                    <a href="https://templates.envytheme.com/erudex/default/index.html">
                                        <img src="images/index/logo.png" alt="logo"/></a>
                                </div>
                                <div className="footer-details">
                                    <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec
                                        sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.</p>
                                    <ul className="social-list social-list-btn">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><i
                                                className="icofont-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><i
                                                className="icofont-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><i
                                                className="icofont-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.pinterest.com/" target="_blank"><i
                                                className="icofont-pinterest"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer-content-list footer-content-item desk-pad-left-70">
                                <div className="footer-content-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul className="footer-details footer-list">
                                    <li><a href="https://templates.envytheme.com/erudex/default/about-us.html">About
                                        Us</a></li>
                                    <li><a
                                        href="https://templates.envytheme.com/erudex/default/blogs-without-right-sidebar.html">News &amp; Blogs</a>
                                    </li>
                                    <li><a
                                        href="https://templates.envytheme.com/erudex/default/services.html">Services</a>
                                    </li>
                                    <li><a
                                        href="https://templates.envytheme.com/erudex/default/products.html">Products</a>
                                    </li>
                                    <li><a href="https://templates.envytheme.com/erudex/default/pricing.html">Our
                                        Pricing</a></li>
                                    <li><a
                                        href="https://templates.envytheme.com/erudex/default/contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer-content-list footer-content-item desk-pad-left-70">
                                <div className="footer-content-title">
                                    <h3>Services</h3>
                                </div>
                                <ul className="footer-details footer-list">
                                    <li><a
                                        href="https://templates.envytheme.com/erudex/default/service-robotic-animation.html">Robotic
                                        Automation</a></li>
                                    <li><a
                                        href="https://templates.envytheme.com/erudex/default/service-predictive-analytics.html">Predictive
                                        Analytic</a></li>
                                    <li><a
                                        href="https://templates.envytheme.com/erudex/default/service-deep-learning.html">Deep
                                        Learning</a></li>
                                    <li><a
                                        href="https://templates.envytheme.com/erudex/default/service-statistical-modeling.html">Statistic
                                        Modeling</a></li>
                                    <li><a
                                        href="https://templates.envytheme.com/erudex/default/service-data-mining.html">Data
                                        Mining</a></li>
                                    <li><a
                                        href="https://templates.envytheme.com/erudex/default/service-security-&amp;-surveillance.html">Security &amp; Surveillance</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer-content-list footer-content-item desk-pad-left-70">
                                <div className="footer-content-title">
                                    <h3>Contact</h3>
                                </div>
                                <div className="footer-details footer-address">
                                    <div className="footer-address-item">
                                        <div className="footer-address-text">
                                            <h4>Phone:</h4>
                                            <p><a href="tel:001-987-654-432">(+1) 987 654 432</a></p>
                                        </div>
                                    </div>
                                    <div className="footer-address-item">
                                        <div className="footer-address-text">
                                            <h4>Email:</h4>
                                            <p><a href="mailto:info@erudex.com">info@erudex.com</a></p>
                                        </div>
                                    </div>
                                    <div className="footer-address-item">
                                        <div className="footer-address-text">
                                            <h4>Address:</h4>
                                            <p>214, Queens 4th cross, NY</p>
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
                        <p>Copyright ©2021 Erudex. Designed &amp; Developed By <a href="https://envytheme.com/"
                                                                                  target="_blank">EnvyTheme</a></p>
                    </div>
                </div>
            </div>

            <div className="scroll-top scrolltopactive" id="scrolltop">
                <div className="scroll-top-inner">
                    <i className="mdi mdi-arrow-up"></i>
                </div>
            </div>

            <div className="search-overlay">
                <div className="search-close">
                    <i className="mdi mdi-close"></i>
                </div>
                <div className="search-form-area">
                    <div className="search-area-logo">
                        <a href="https://templates.envytheme.com/erudex/default/index.html">
                            <img src="images/index/logo-white.png" alt="logo"/>
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
            </div>
        </footer>
    );
};

export default Footer;
