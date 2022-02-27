import React from "react";
import {Link} from "react-router-dom";

const services = () => {
	return (
        <section>
            <div className="about-section bg-off-white pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/index/AI.png" alt="shape"/>
                            </div>
                        </div>
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2>AI has a key place in making robots intelligent.</h2>
                                </div>
                                <div className="about-content">
                                    <p>A robot is an autonomous physical machine designed to perform actions automatically with speed and accuracy.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2>AI Powered Analytics</h2>
                                </div>
                                <div className="about-content">
                                    <p>The digital twin uses IoT sensors, log files and other relevant information to collect real-time data for accurate modeling of assets.
                                        These models are then combined without  AI-powered analytics tools in a virtual setting.</p>

                                    <p>Robots that resemble the human body are called androids.</p>

                                    <p>Artificial intelligence robots are a combination of AI and robotics, where AI software is embedded in robot systems.</p>

                                    <p>In other words, AI has a key place in making robots intelligent.
                                        The most advanced robots are those controlled by AI that can learn from their environment and experience and then build on their capabilities based on that knowledge.
                                    </p>
                                </div>

                                <div className="section-title section-title-left text-start mt-5 mb-0">
                                    <small className="mb-0">Vision and Imaging</small>
                                    <p>A robot that continuously makes the same motion over and over again is common in manufacturing,
                                        but the flexibility of artificial intelligence allows for even more capabilities.
                                        Artificial intelligence can be used to improve a robot’s visual acuity and the accuracy of its image recognition.
                                        These are important for assembly, as robots welding or cutting can adapt to the smallest micro-level tolerances.
                                        Accurate vision is also important to logistics,
                                        as a robot with high visual acuity can put the right objects in the right containers no matter what those objects or containers are.</p>

                                    <small className="mb-0">Grasping and Manipulation</small>
                                    <p>Artificial intelligence is about more than just enabling independent action–a robot in manufacturing can actually develop better
                                        ways to mechanically interact with the world. A robot using artificial intelligence in developing the best, most efficient ways to
                                        utilize its moving parts. Like most applications of AI in robotics, the bulk of work done in this area is done long before the robot is
                                        operating on the factory floor and is a part of an overall machine learning phase.</p>

                                    <small className="mb-0">Machine Learning Applications</small>
                                    <p>If you have a robotic vacuum in your home, you’ve already seen a smaller, less advanced version of the methods used to train robots in
                                        manufacturing. A robot explores its surroundings, learning more about where it is, what obstacles it will need to navigate, and what
                                        challenges it will need to overcome in order to accomplish the tasks important to its primary purpose. For a vacuum cleaner,
                                        this data is usually no more complicated than a path to travel or, occasionally, what strength of suction is needed depending on the
                                        surface.</p>

                                    <p>Once a robot learns where it can go and what it needs to do, those computing cycles can be focused on accomplishing its tasks rather
                                        than learning how to do them. There is always the option of pre-programming in those situations where learning might not be the best
                                        approach.</p>

                                    <small className="mb-0">Customer Service</small>
                                    <p>Another kind of artificial intelligence that many people have encountered in their daily lives is the customer service artificial
                                        intelligence implementation known as a chatbot. These are the automated service agents on websites that can help with simple, frequent,
                                        repeatable requests that don’t require a human agent. Customers often have questions like “did my package ship yet?” or “what are your
                                        hours?” that are easy for AI to parse, and can be answered with much the same simplicity.</p>

                                    <p>While a chatbot is not a robot in the traditional sense, the same kind of questions are frequently asked at brick and mortar stores that
                                        take the valuable time of human beings who are better used elsewhere. If a robot can be programmed to patrol a physical location,
                                        answering questions, helping customers, the savings will add up.</p>

                                    <p>The other side of the customer service coin is employee service. These are often also called cobots, as they cooperate with human users,
                                        such as assembling and then handing off a component to a human inspector. Since a cobot’s operations are flexible and less rigidly
                                        defined than other robots in manufacturing, more and more they are relying on AI to do more sophisticated tasks.
                                        The nature of cobots allows for them to be used in many ways and for many purposes, from answering questions to providing remote
                                        telepresence to management or off-site employees.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default services;
