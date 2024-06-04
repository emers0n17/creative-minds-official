// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './home.css'
import logo from "../../assets/logo.jpg";

function Menu_start() {
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
          <span id="navbar-toggler-icon" className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
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
          </ul>
        </div>
      </nav>
    </>
  );
}

function Cube1(){
  return (
    <>
      <div className="cube1-content">

      </div>
    </>
  )
}

function Cube2(){
  return (
    <>
      <div className="cube2-content">

      </div>
    </>
  )
}

function Content_start() {
  return (
    <>
      <div className="content_start">
        <div className="content_start-cube1">
          <Cube1 />
        </div>
        <div className="content_start-cube2">
        <Cube2 />
        </div>
        <div className="content_start-border"></div>
      </div>
    </>
  );
}

function Apresentacao_start() {
  return (
    <>
      <div className="apresentation-start">
          <h1>
            Design, Criacao e Gerenciamento do seu site
          </h1>
          <p>
            Fornecemos serviços de criação, gerenciamento de sites e fornecemos tambem serviçõs de design.</p>
        </div>
    </>
  )
}

function Home() {
  return (
    <>
      <header className="header">
        <Menu_start />
        <Apresentacao_start />
        <Content_start />
      </header>
    </>
  );
}

export default Home;
