/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/Default_Create_a_logo_with_white_background_for_my_marketing_c_1.jpg';
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
                          Baseados no coração de Moçambique, somos uma equipe apaixonada dedicada a transformar sua presença online. Nossa expertise abrange design de sites, desenvolvimento e marketing digital, garantindo que sua marca se destaque no cenário digital.
                      </p>
                      <p>
                          Fundada em 2024, nossa missão sempre foi entregar soluções inovadoras que geram resultados. Com uma compreensão profunda do mercado local e uma perspectiva global, combinamos criatividade com tecnologia para criar sites que não apenas parecem incríveis, mas também têm desempenho excepcional.
                      </p>
                      <p>
                          Nossa equipe é composta por talentosos designers, desenvolvedores habilidosos e estrategistas de marketing que trabalham de forma colaborativa para trazer sua visão à vida. Acreditamos no poder das histórias e buscamos criar experiências digitais que envolvam, inspirem e convertam.
                      </p>
                      <p>
                          No centro de nossos valores está o compromisso com a excelência, integridade e satisfação do cliente. Nos orgulhamos de construir relacionamentos duradouros com nossos clientes, guiando-os pelo mundo digital em constante evolução com serviço e suporte personalizados.
                      </p>
                      
                  </div>
              </div>
          </div>
      </section>
  );
}

export default AboutUs;
