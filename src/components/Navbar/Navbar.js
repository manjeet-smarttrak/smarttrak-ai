import React from "react";
import {Link} from "react-router-dom";

const navbar = () => {
    return (
        <div className="fixed-top non-fixed">
            <div className="navbar-area sticky-black is-sticky">
                <div className="container-fluid">
                    <div className="mobile-nav">
                        <a href="https://templates.envytheme.com/erudex/default/index.html" className="mobile-brand">
                            <img src="images/index/logo.png" alt="logo" className="logo logo-image"/>
                        </a>
                        <div className="navbar-option">
                            <div className="navbar-option-item">
                                <button type="button">
                                    <i className="mdi mdi-account-outline"></i>
                                </button>
                            </div>
                            <div className="navbar-option-item side-topbar-option">
                                <button type="button">
                                    <i className="mdi mdi-apps"></i>
                                </button>
                            </div>
                            <div className="navbar-option-item">
                                <button type="button" className="search-option">
                                    <i className="mdi mdi-magnify"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand"
                               href="https://templates.envytheme.com/erudex/default/index.html">
                                <img src="images/index/logo.png" alt="logo" className="logo logo-image"/>
                            </a>
                            <div className="collapse navbar-collapse mean-menu d-block" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a href="https://templates.envytheme.com/erudex/default/index.html#"
                                           className="nav-link active">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://templates.envytheme.com/erudex/default/about-us.html"
                                           className="nav-link">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://templates.envytheme.com/erudex/default/index.html#"
                                           className="nav-link dropdown-toggle">Services</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/faqs.html"
                                                   className="nav-link">FAQ's</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/our-team.html"
                                                   className="nav-link">Our Team</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/testimonial.html"
                                                   className="nav-link">Testimonial</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/careers.html"
                                                   className="nav-link">Careers</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/index.html#"
                                                   className="nav-link">Products</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://templates.envytheme.com/erudex/default/contact.html"
                                           className="nav-link">Contact</a>
                                    </li>
                                    <li className="nav-item search-option">
                                        <i className="mdi mdi-magnify"></i>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default navbar;
