/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

const Footer = () => {
    return (
        <footer id='footer' className="text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Sobre</h5>
                        <p>
                            Nos somos uma agencia criativa especializada em desenvolvimento web, design, e marketing digital. Nosso objectivo e ajudar voce a estabelecer uma forte presenca online.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Atalhos</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white">Home</a></li>
                            <li><a href="/services" className="text-white">Services</a></li>
                            <li><a href="/portfolio" className="text-white">Portfolio</a></li>
                            <li><a href="/contact" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div id='lista2' className="col-md-4">
                        <h5>Contactos</h5>
                        <ul className="list-unstyled">
                            <li><i className="fas fa-map-marker-alt"></i> Matundo, Tete, Mz</li>
                            <li><i className="fas fa-phone"></i> +255 84 967 6207</li>
                            <li><i className="fas fa-envelope"></i> creativeminds@gmail.com</li>
                        </ul>
                        <div className="mt-3">
                            <a href="https://www.facebook.com" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com" className="text-white me-3"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com" className="text-white"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div id='copiright-container' className="text-center mt-3">
                    <p><i>&copy; 2024 Creative minds Lda. Todos direitos reservados.</i></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
