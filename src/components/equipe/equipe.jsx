/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import emerson from '../../assets/man.png';
import './equipe.css';

const Equipe = () => {
    const funcionarios = [
        { nome: 'Edmilson M. Bilate', cargo: 'CEO', imagem:  `${emerson}` },
        { nome: 'Emerson D. Covane', cargo: 'Desenvolvedor Chefe', imagem: `${emerson}` },
        { nome: 'Edson C. Cjey', cargo: 'Designer Chefe', imagem: `${emerson}` },
        { nome: '-- -- --', cargo: 'Especialista em Marketing', imagem: `${emerson}`  },
    ];

    return (
        <section id="equipe" className="py-5">
            <div id='container-equipe' className="container">
                <h2 id='equipe-header' className="text-center mb-4">Nossa Equipe</h2>
                <div className="row">
                    {funcionarios.map((funcionario, index) => (
                        <div key={index} className="col-md-6 text-center">
                            <img src={funcionario.imagem} alt={funcionario.nome} className="img-fluid mb-3" />
                            <h5>{funcionario.nome}</h5>
                            <p>{funcionario.cargo}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Equipe;
