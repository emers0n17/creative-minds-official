/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/about2.png';
import './about.css';

const AboutUs = () => {
  return (
      <section id="sobre-nos" className="py-5">
          <div id='container' className="container">
              <div className="row align-items-center">
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }} className="col-md-6">
                      <img src={logo} alt="Sobre Nós" className=" img-fluid " />
                  </div>
                  <div id="description" className="col-md-6">
                      <h2  className=" mb-4">Sobre Nós</h2>
                      <p>
                        <div class="about-title">
                        Missão
                        </div>
                      Ajudar empresas locais a fortalecer sua presença online e atrair mais clientes.
                      </p>
                      <p>
                      <div class="about-title">
                        Visão
                        </div>
                      Ser a agência de publicidade de referência para negócios locais.
                      </p>
                      <p>
                      <div class="about-title">
                        Objectivos
                        </div>
                      O foco da Paisana é elevar o seu negócio a outro patamar.
                      </p>
                      <p>
                      <div class="about-title">
                        Valores
                        </div>
                      Inovação, Qualidade, Foco no Cliente.

                      </p>
                      
                  </div>
              </div>
          </div>
      </section>
  );
}

export default AboutUs;
