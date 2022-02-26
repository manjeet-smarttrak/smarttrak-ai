import React from "react";
import {Link} from "react-router-dom";

const navbar = () => {
    return (
        <div className="fixed-top non-fixed">
            <div className="navbar-area sticky-black is-sticky">
                <div className="container-fluid">
                    <div className="mobile-nav">
                        <Link to="/" onClick={() => {window.location.href="/"}} className="mobile-brand">
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
                        </div>
                    </div>
                </div>
                <div className="main-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link className="navbar-brand"
                               to="/" onClick={() => {window.location.href="/"}}>
                                <img src="images/index/logo.png" alt="logo" className="logo logo-image"/>
                            </Link>
                            <div className="collapse navbar-collapse mean-menu d-block" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to="/"
                                              onClick={() => {window.location.href="/"}}
                                           className="nav-link active">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/aboutus" className="nav-link">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/services"
                                              className="nav-link">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/career"
                                              className="nav-link">Career</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact"
                                           className="nav-link">Contact Us</Link>
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
