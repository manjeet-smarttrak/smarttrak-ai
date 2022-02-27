import React from "react";
import {Link} from "react-router-dom";

const Landing = () => {
    return (
        <section>
            <div className="testimonial-section p-tb-100 position-relative">
                <div className="container-fluid p-0">
                    <div className="banner-carousel default-carousel owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer pt-0">
                            <div className="owl-stage">
                                <div className="owl-item cloned">
                                    <div className="item">
                                        <div className="big-image clone-0">
                                            <div className="overlay">
                                                <h1>Artificial Intelligence of Things</h1>
                                                <p className="px-5">Smarttrak AI is a AIOT company providing solutions to industry verticals, inferencing Deep
                                                    Learning Models on Edge based Internet Of Things Devices.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item cloned">
                                    <div className="item">
                                        <div className="big-image clone-1">
                                            <div className="overlay">
                                                <h1>AIoT Feature</h1>
                                                <p className="px-5">These solutions will
                                                    focus primarily upon optimizing system and network operations as well as
                                                    extracting value from industry data through dramatically improved analytics
                                                    and decision-making processes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item cloned">
                                    <div className="item">
                                        <div className="big-image clone-2">
                                            <div className="overlay">
                                                <h1>Features We Offer</h1>
                                                <p className="px-5">Predicting the need to create the value connected to Smarttrak makes life easy and systematic.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item">
                                    <div className="item">
                                        <div className="big-image clone-3">
                                            <div className="overlay">
                                                <h1>Business Solution</h1>
                                                <p className="px-5">Grow smarter, grow faster as we need solutions at the right place and here we are empowering all the needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="feature-section pb-70">
                <div className="container">
                    <div className="section-title section-title-lg">
                        <h2>Any Sufficiently Advanced <br/> Technology Is Indistinguishable From Magic</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 pb-30">
                                <div className="feature-card">
                                    <div className="feature-card-header">
                                        <div className="feature-card-thumb feature-card-thumb-green">
                                            <i className="mdi mdi-account-tie"></i>
                                        </div>
                                        <span>AI Technology</span>
                                    </div>
                                    <div className="feature-card-body">
                                        <p>End-to-end Deep Learning and Machine Learning models for building AI systems.</p>
                                        <Link to="/aboutus" className="redirect-link">Discover More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 pb-30">
                                <div className="feature-card">
                                    <div className="feature-card-header">
                                        <div className="feature-card-thumb feature-card-thumb-yellow">
                                            <i className="mdi mdi-account-key"></i>
                                        </div>
                                        <span>Digital Twin</span>
                                    </div>
                                    <div className="feature-card-body">
                                        <p>A digital twin is a virtual/ digital replica of physical entities which help businesses make model-driven decisions.</p>
                                        <Link to="/aboutus" className="redirect-link">Discover More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 pb-30">
                                <div className="feature-card">
                                    <div className="feature-card-header">
                                        <div className="feature-card-thumb feature-card-thumb-blue">
                                            <i className="mdi mdi-account-network"></i>
                                        </div>
                                        <span>Robotics</span>
                                    </div>
                                    <div className="feature-card-body">
                                        <p>Artificial intelligence robots are a combination of AI and robotics, where AI software is embedded in robot systems.</p>
                                        <Link to="/aboutus" className="redirect-link">Discover More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-off-white pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/index/feature-shape-1.png" alt="shape"/>
                            </div>
                        </div>
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <small>About Us</small>
                                    <h2>Smarttrak is AI is a solution company focused on.</h2>
                                </div>
                                <div className="about-content">
                                    <ul>
                                        <li>Revolutionize the businesses  with Advanced</li>
                                        <li>Intelligent and predictive assets monitoring</li>
                                    </ul>
                                    <p>We help businesses to lead the charge to digital innovation and tap into the power of the AI.
                                        By transforming  teams and creating a competitive advantage that will scale.</p>
                                    <Link to="/aboutus" className="btn main-btn">About Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title section-title-lg">
                        <small>Services</small>
                        <h2>Redefine the way you do business with Smarttrak Solutions</h2>
                        <p>Our purpose is to deliver excellence in service and execution Our purpose is to deliver
                            excellence in service and Our purpose is to deliver excellence in service.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 pb-30">
                            <div className="service-card">
                                <div className="service-card-thumb">
                                    <i className="mdi mdi-robot-industrial"></i>
                                </div>
                                <div className="service-card-body">
                                    <h3>Robotic Automation</h3>
                                    <p>Robotic process automation (RPA) is a software technology that makes it easy to build, deploy, and
                                        manage software.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 pb-30">
                            <div className="service-card">
                                <div className="service-card-thumb">
                                    <i className="mdi mdi-home-analytics"></i>
                                </div>
                                <div className="service-card-body">
                                    <h3>Predictive Analytics</h3>
                                    <p>It refers to the use of statistics and modeling techniques to make
                                        predictions about future outcomes and performance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 pb-30">
                            <div className="service-card">
                                <div className="service-card-thumb">
                                    <i className="mdi mdi-school-outline"></i>
                                </div>
                                <div className="service-card-body">
                                    <h3>Deep Learning</h3>
                                    <p>It is extremely beneficial to data scientists who are tasked with collecting,
                                        analyzing and interpreting large amounts of data.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 pb-30">
                            <div className="service-card">
                                <div className="service-card-thumb">
                                    <i className="mdi mdi-cable-data"></i>
                                </div>
                                <div className="service-card-body">
                                    <h3>Data Mining</h3>
                                    <p>Data mining is the process of finding anomalies, patterns and correlations within
                                        large data sets to predict outcomes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
