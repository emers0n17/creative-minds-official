/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import './CardServico.css';
import './servicos.css';

const CardServico = ({ imagem, titulo, descricao, precoTitulo1, preco1, precoTitulo2, preco2 }) => {
  return (
    <div
    id='row'
      className="row"
    >
      <div id='containerImagen' className="col-md-6">
        <img
          className="img-fluid"
          src={imagem}
          alt={titulo}
        />
      </div>
      <div 
        style={{display: 'flex',overflow: 'hidden', flexDirection: 'column', justifyContent: 'space-between' }}
        className="col-md-6 text-white p-4"
      >
        <h1
          id='card-header' className="mb-4  pb-3"
        >
          {titulo}
        </h1>
        <p id='text-description'>
          {descricao}
        </p>
        <p id='text-description'>
          {descricao}
        </p>
        <div id='prices' style={{overflow: 'hidden'}} className="row">
          <div  className="col-sm-6">
            <div id='prices-desc' className="cardPreco container-fluid text-center p-3">
              <a style={{textDecoration: 'none' ,cursor: 'pointer'}} href="#">{precoTitulo1}</a>
              <p>{`${preco1} MZN`}</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div id='prices-desc' className="cardPreco container-fluid text-center p-3">
              <a href="#" style={{textDecoration: 'none' ,cursor: 'pointer'}}>{precoTitulo2}</a>
              <p>{`${preco2} MZN`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardServico.propTypes = {
  imagem: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  precoTitulo1: PropTypes.string.isRequired,
  preco1: PropTypes.string.isRequired,
  precoTitulo2: PropTypes.string.isRequired,
  preco2: PropTypes.string.isRequired
};

export default CardServico;
