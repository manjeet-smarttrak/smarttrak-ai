import React from "react";
import {Link} from "react-router-dom";

const navbar = () => {
    return (
        <div className="fixed-top non-fixed">
            <div className="topbar">
                <div className="container-fluid">
                    <div className="topbar-inner">
                        <div className="row justify-content-center justify-content-lg-between">
                            <div className="topbar-item topbar-left">
                                <ul className="topbar-list">
                                    <li>
                                        <i className="mdi mdi-phone"></i>
                                        <a href="tel:00321-654-98">+00 321 654 98</a>
                                    </li>
                                    <li>
                                        <i className="mdi mdi-email-outline"></i>
                                        <a href="mailto:info@erudex.com">info@erudex.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="topbar-item topbar-right">
                                <ul className="topbar-list">
                                    <li>
                                        <i className="mdi mdi-send-outline"></i>
                                        <a href="https://templates.envytheme.com/erudex/default/contact.html">Request
                                            For Demo</a>
                                    </li>
                                    <li className="search-option">
                                        <i className="mdi mdi-magnify"></i>
                                        <a href="https://templates.envytheme.com/erudex/default/index.html#"
                                           className="search-popup">Search</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-area sticky-black is-sticky">
                <div className="container-fluid">
                    <div className="mobile-nav">
                        <a href="https://templates.envytheme.com/erudex/default/index.html" className="mobile-brand">
                            <img src="images/index/logo.png" alt="logo" className="logo"/>
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
                                <img src="images/index/logo.png" alt="logo" className="logo"/>
                            </a>
                            <div className="collapse navbar-collapse mean-menu d-block" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item">
                                        <a href="https://templates.envytheme.com/erudex/default/index.html#"
                                           className="nav-link dropdown-toggle active">Home</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item nav-item-1">
                                                <a href="https://templates.envytheme.com/erudex/default/index.html"
                                                   className="nav-link active">Home Demo 1</a>
                                            </li>
                                            <li className="nav-item nav-item-2">
                                                <a href="https://templates.envytheme.com/erudex/default/index-2.html"
                                                   className="nav-link">Home Demo 2</a>
                                            </li>
                                            <li className="nav-item nav-item-3">
                                                <a href="https://templates.envytheme.com/erudex/default/index-3.html"
                                                   className="nav-link">Home Demo 3</a>
                                            </li>
                                        </ul>
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
                                                <a href="https://templates.envytheme.com/erudex/default/services.html"
                                                   className="nav-link">Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/service-robotic-animation.html"
                                                   className="nav-link">Single Service</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://templates.envytheme.com/erudex/default/index.html#"
                                           className="nav-link dropdown-toggle">Pages</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/pricing.html"
                                                   className="nav-link">Pricing</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/faqs.html"
                                                   className="nav-link">FAQ's</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/our-team.html"
                                                   className="nav-link">Our Team</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/index.html#"
                                                   className="nav-link dropdown-toggle">Projects</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/projects.html"
                                                           className="nav-link">Projects</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/single-project.html"
                                                           className="nav-link">Single Project</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/index.html#"
                                                   className="nav-link dropdown-toggle">Case Study</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/cases.html"
                                                           className="nav-link">Case</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/cases-two-columns.html"
                                                           className="nav-link">Cases Two Columns</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/single-case.html"
                                                           className="nav-link">Single Case</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/testimonial.html"
                                                   className="nav-link">Testimonial</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/our-clients.html"
                                                   className="nav-link">Our Clients</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/careers.html"
                                                   className="nav-link">Careers</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/index.html#"
                                                   className="nav-link dropdown-toggle">Products</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/products.html"
                                                           className="nav-link">Products</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/single-product.html"
                                                           className="nav-link">Single Product</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/cart.html"
                                                           className="nav-link">Cart</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/checkout.html"
                                                           className="nav-link">Checkout</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/index.html#"
                                                   className="nav-link dropdown-toggle">Users</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/authentication.html"
                                                           className="nav-link">Authentication</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/forget-password.html"
                                                           className="nav-link">Forget Password</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/my-account.html"
                                                           className="nav-link">My Account</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/my-orders.html"
                                                           className="nav-link">My Orders</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/my-addresses.html"
                                                           className="nav-link">My Addresses</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/index.html#"
                                                   className="nav-link dropdown-toggle">Others</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/demo-product.html"
                                                           className="nav-link">Demo Product</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/feedback.html"
                                                           className="nav-link">Feedback</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/terms-of-service.html"
                                                           className="nav-link">Terms Of Service</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/privacy-policy.html"
                                                           className="nav-link">Privacy Policy</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/search-page.html"
                                                           className="nav-link">Search Page</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/404.html"
                                                           className="nav-link">404 Error Page</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="https://templates.envytheme.com/erudex/default/coming-soon.html"
                                                           className="nav-link">Coming Soon</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://templates.envytheme.com/erudex/default/index.html#"
                                           className="nav-link dropdown-toggle">Blogs</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/blogs-without-right-sidebar.html"
                                                   className="nav-link">Blogs Grid</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/blogs-right-sidebar.html"
                                                   className="nav-link">Blogs Right Sidebar</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="https://templates.envytheme.com/erudex/default/single-blog.html"
                                                   className="nav-link">Single Blog</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="https://templates.envytheme.com/erudex/default/contact.html"
                                           className="nav-link">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar-option">
                                <div className="navbar-option-item">
                                    <a href="https://templates.envytheme.com/erudex/default/authentication.html"
                                       className="btn main-btn">Login Or Register</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default navbar;
