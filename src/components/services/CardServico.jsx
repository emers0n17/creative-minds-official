/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import './CardServico.css';
import './servicos.css';

const CardServico = ({ fundo, imagem, titulo, descricao, precoTitulo1, preco1, precoTitulo2, preco2, background }) => {
  return (
    <div
      style={{ minHeight: "500px", marginTop: '40px', backgroundColor: fundo }}
      className="row"
    >
      <div className="col-md-6">
        <img
          style={{ maxHeight: "500px" }}
          className="img-fluid"
          src={imagem}
          alt={titulo}
        />
      </div>
      <div 
        style={{ backgroundColor: background, display: 'flex', borderRadius: '5px', overflow: 'hidden', flexDirection: 'column', justifyContent: 'space-between' }}
        className="col-md-6 text-white p-4"
      >
        <h1
          className="text-center mb-4 border-bottom pb-3"
        >
          {titulo}
        </h1>
        <p className="text-justify">
          {descricao}
        </p>
        <div className="row">
          <div className="col-sm-6">
            <div className="cardPreco container-fluid text-center p-3">
              <h2>{precoTitulo1}</h2>
              <p>{`${preco1} MZN`}</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="cardPreco container-fluid text-center p-3">
              <h2>{precoTitulo2}</h2>
              <p>{`${preco2} MZN`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardServico.propTypes = {
  fundo: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  precoTitulo1: PropTypes.string.isRequired,
  preco1: PropTypes.string.isRequired,
  precoTitulo2: PropTypes.string.isRequired,
  preco2: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default CardServico;
