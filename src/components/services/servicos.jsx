/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CardServico from './CardServico';
import webDevelopment from '../../assets/website-creator-concept-illustration.png';
import design from '../../assets/flat-design-rebranding-illustration.png';
import marketing from '../../assets/hand-drawn-illustration-people-with-smartphone-marketing.png';
import './servicos.css';

function Servicos() {
  return (
    <section id="container-fluid" >
      <div id='container-fluid-hedaer' style={{backgroundColor: '#353d47'}} className="container text-center">
        <h1 style={{color: '#91e646'}}>Serviços</h1>
        <p>Confira os serviços que temos disponíveis no momento</p>
      </div>

      <div id='cards-container' className="container">
        <CardServico 
          precoTitulo1="Site dinâmico" preco1="10 000" 
          precoTitulo2="Aplicação web" preco2="30 000" 
          background="#6a00ff" imagem={webDevelopment} 
          descricao="Desenvolvemos sites e aplicações web profissionais, responsivos e otimizados para mecanismos de busca, ajudando sua empresa a ter uma presença digital forte e eficiente." 
          titulo="Desenvolvimento Web" 
        />
        <CardServico 
          precoTitulo1="Cartaz" preco1="2 500" 
          precoTitulo2="Mockup" preco2="15 000" 
          background="#6a00ff" imagem={design} 
          descricao="Criamos designs modernos e impactantes para sua marca, incluindo logotipos, materiais gráficos e identidade visual completa que comunica a essência do seu negócio." 
          titulo="Design" 
        />
        <CardServico 
          precoTitulo1="Site dinâmico" preco1="10 000" 
          precoTitulo2="Aplicação web" preco2="30 000" 
          background="#6a00ff" imagem={marketing} 
          descricao="Estabelecer Presença em Plataformas como facebook, Instagram e outras redes sociais." 
          titulo="Marketing" 
        />
      </div>
    </section>
  );
}

export default Servicos;
