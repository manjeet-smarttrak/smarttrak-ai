import React from "react";
import {Link} from "react-router-dom";

const contactUs = () => {
	return (
        <section id="contact">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-lg-10 py-4 bg-light shadow-sm rounded">
                        <div className="hero-banner__content">
                            <div className="col-12">
                                <h5 className="font-weight-bold">
                                    SmartTrak Solar Systems
                                </h5>
                                <h5>Address: <small className="text-muted">
                                    321 Trautz Ln, Holly Springs,NC 27540 USA</small>
                                </h5>
                                <h5>Email: <small className="text-muted">info@smarttrak.co</small></h5>
                                <h5>Contact: <small className="text-muted">(+1) 510-945-8169</small></h5>
                                {/*<div className="text-center">
                                    <div className="w-100">
                                        <iframe className="smarttrak-map w-100" frameBorder="0" scrolling="no"
                                                marginHeight="0" marginWidth="0"
                                                title="smarttrak-map"
                                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=H.No.1-90/2/10/E,%20Ground%20Floor,%20Cyberabad,%20Vittal%20Rao%20Nagar,%20Madhapur,%20Hyderabad,%20Telangana%20500081+(SmartTrak%20Solar%20Systems)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default contactUs;
