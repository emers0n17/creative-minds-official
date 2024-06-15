/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CardServico from './CardServico';
import card1 from '../../assets/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration.png';
import './servicos.css';

function Servicos() {
  return (
    <section className="container-fluid py-5">
      <div className="container text-center mb-5">
        <h1>Serviços</h1>
        <p>Confira os serviços que temos disponíveis no momento</p>
      </div>

      <div className="container">
        <CardServico 
          precoTitulo1="Site dinâmico" preco1="10 000" 
          precoTitulo2="Aplicação web" preco2="30 000" 
          background="#6a00ff" imagem={card1} 
          descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa optio dignissimos doloremque voluptate, officiis aliquid, neque reprehenderit ea, odio sit quis cumque sequi debitis a enim mollitia blanditiis sapiente!" 
          titulo="Desenvolvimento Web" 
        />
        <CardServico 
          precoTitulo1="Site dinâmico" preco1="10 000" 
          precoTitulo2="Aplicação web" preco2="30 000" 
          background="#6a00ff" imagem={card1} 
          descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa optio dignissimos doloremque voluptate, officiis aliquid, neque reprehenderit ea, odio sit quis cumque sequi debitis a enim mollitia blanditiis sapiente!" 
          titulo="Desenvolvimento Web" 
        />
        <CardServico 
          precoTitulo1="Site dinâmico" preco1="10 000" 
          precoTitulo2="Aplicação web" preco2="30 000" 
          background="#6a00ff" imagem={card1} 
          descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa optio dignissimos doloremque voluptate, officiis aliquid, neque reprehenderit ea, odio sit quis cumque sequi debitis a enim mollitia blanditiis sapiente!" 
          titulo="Desenvolvimento Web" 
        />
      </div>
    </section>
  );
}

export default Servicos;
