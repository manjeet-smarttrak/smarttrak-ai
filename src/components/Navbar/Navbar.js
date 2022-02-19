import React from "react";
import {Link} from "react-router-dom";

const navbar = () => {
    return (
        <div className="fixed-top non-fixed">
            <div className="navbar-area sticky-black is-sticky">
                <div className="container-fluid">
                    <div className="mobile-nav">
                        <Link to="/" className="mobile-brand">
                            <img src="images/index/logo.png" alt="logo" className="logo logo-image"/>
                        </Link>
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
                            <Link className="navbar-brand"
                               to="/">
                                <img src="images/index/logo.png" alt="logo" className="logo logo-image"/>
                            </Link>
                            <div className="collapse navbar-collapse mean-menu d-block" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to="/"
                                           className="nav-link active">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/aboutus" className="nav-link">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link dropdown-toggle">Services</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link to="/faq"
                                                   className="nav-link">FAQ's</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/our-team"
                                                   className="nav-link">Our Team</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/career"
                                                   className="nav-link">Careers</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/product"
                                                   className="nav-link">Products</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact"
                                           className="nav-link">Contact</Link>
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
