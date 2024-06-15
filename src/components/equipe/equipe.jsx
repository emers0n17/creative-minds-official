/* eslint-disable no-unused-vars */
import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './equipe.css';

const Equipe = () => {
    const funcionarios = [
        { nome: 'Ana Silva', cargo: 'CEO', imagem: 'ana-silva.jpg' },
        { nome: 'Carlos Santos', cargo: 'Desenvolvedor Chefe', imagem: 'carlos-santos.jpg' },
        { nome: 'Maria Fernandes', cargo: 'Designer Chefe', imagem: 'maria-fernandes.jpg' },
        { nome: 'Pedro Oliveira', cargo: 'Especialista em Marketing', imagem: 'pedro-oliveira.jpg' },
    ];

    return (
        <section id="equipe" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center text-primary mb-4">Nossa Equipe</h2>
                <div className="row">
                    {funcionarios.map((funcionario, index) => (
                        <div key={index} className="col-md-3 text-center">
                            <img src={funcionario.imagem} alt={funcionario.nome} className="img-fluid rounded-circle mb-3" />
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
