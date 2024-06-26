/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CardServico from './CardServico';
import webDevelopment from '../../assets/organic-flat-computer-programming-illustration.png';
import design from '../../assets/low-code-development-concept-illustration.png';
import marketing from '../../assets/dados-informam-o-conceito-de-ilustracao.png';
import './servicos.css';

function Servicos() {
  return (
    <section id="container-fluid">
      <div id='container-fluid-hedaer' className="container text-center">
        <h1>Serviços</h1>
        <p>Confira os serviços que temos disponíveis no momento</p>
      </div>

      <div id='cards-container' className="container">
        <CardServico 
          precoTitulo1="Site dinâmico" preco1="10 000" 
          precoTitulo2="Aplicação web" preco2="30 000" 
          background="#6a00ff" imagem={webDevelopment} 
          descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa optio dignissimos doloremque voluptate, officiis aliquid, neque reprehenderit ea, odio sit quis cumque sequi debitis a enim mollitia blanditiis sapiente!" 
          titulo="Desenvolvimento Web" 
        />
        <CardServico 
          precoTitulo1="Cartaz" preco1="2 500" 
          precoTitulo2="Mockup" preco2="15 000" 
          background="#6a00ff" imagem={design} 
          descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa optio dignissimos doloremque voluptate, officiis aliquid, neque reprehenderit ea, odio sit quis cumque sequi debitis a enim mollitia blanditiis sapiente!" 
          titulo="Design" 
        />
        <CardServico 
          precoTitulo1="Site dinâmico" preco1="10 000" 
          precoTitulo2="Aplicação web" preco2="30 000" 
          background="#6a00ff" imagem={marketing} 
          descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa optio dignissimos doloremque voluptate, officiis aliquid, neque reprehenderit ea, odio sit quis cumque sequi debitis a enim mollitia blanditiis sapiente!" 
          titulo="Marketing" 
        />
      </div>
    </section>
  );
}

export default Servicos;
