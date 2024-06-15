import './conteudo.css'
import logo from "../../assets/logo.jpg";


export default function Menu() {
  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
        <a id="navbar-brand" className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span id="navbar-toggler-icon" className=" navbar-toggler-icon " >
            <div></div>
            <div></div>
            <div></div>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#sobre">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#sobre">
                Servicos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#sobre">
                Trabalhos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#sobre">
                Equipe
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#sobre">
                Planos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#sobre">
                Contactos
              </a>
            </li>
            <li className="nav-item">
              <button>Tema</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}