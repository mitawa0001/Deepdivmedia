import React from "react";
import logo_new from "../../assest/logo.png";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Footer = () => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <>
            <section id="footer-fixed">
                <div class="big-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 ">
                                <h3>Like what you see?
                                    <span className="let_span">Let’s work</span>
                                </h3>
                                <div class="footer-logo">
                                    <Link class="current py-5 my-5" to="/">
                                        <img src={logo_new} style={{ width: "250px" }} alt=""></img>
                                    </Link>
                                    <p>We specialize in creating tailored solutions for all who strives for tech, leaving a lasting imprint on your journey to success.</p>
                                </div>

                            </div>

                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                <div class="footer-heading ">
                                    <h3>quick links</h3>
                                </div>
                                <div class="footer-content ">
                                    <ul>
                                        <li>
                                            <Link class="current" to="aboutus">
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link class="current" to="contact">
                                                Contact
                                            </Link>
                                        </li>
                                        <li>
                                            <Link class="current" to="career">
                                                Career
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-3 col-sm-6">
                                <div class="footer-heading">
                                    <h3>Get Updates</h3>
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Form.Group controlId="validationCustomUsername">
                                            <InputGroup hasValidation>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter your email"
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please enter email Id.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                        <Button type="submit">Subscribe</Button>
                                    </Form>
                                </div>
                                <div class="footer-content footer-cont-mar-40">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <p>All rights reserved © Vertipride Solutions Pvt. Ltd. 2023</p>
                </footer>
            </section>
        </>
    );
}

export default Footer;
