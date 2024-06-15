/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>
                            We are a creative agency specializing in web design, development, and digital marketing.
                            Our goal is to help businesses establish a strong online presence.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Home</a></li>
                            <li><a href="/services" className="text-white">Services</a></li>
                            <li><a href="/portfolio" className="text-white">Portfolio</a></li>
                            <li><a href="/contact" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><i className="fas fa-map-marker-alt"></i> 123 Main St, Anytown, USA</li>
                            <li><i className="fas fa-phone"></i> (123) 456-7890</li>
                            <li><i className="fas fa-envelope"></i> info@yourcompany.com</li>
                        </ul>
                        <div className="mt-3">
                            <a href="https://www.facebook.com" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com" className="text-white me-3"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com" className="text-white"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>&copy; 2024 Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
