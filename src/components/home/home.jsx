import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./home.css";
import Menu from "./menu";
import '../../../node_modules/jquery';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Content_start() {
  return (
    <>
      <div id="container-start-home" className="row container-start-home">
        <div style={{display: 'flex', justifyContent: 'center'}} className="col-sm-12">
          <Apresentacao_start />
        </div>
      </div>
    </>
  );
}

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'repulse',
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: '#000000',
        },
        links: {
          color: '#000000',
          distance: 150,
          enable: true,
          opacity: 0.6,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: 'triangle',
        },
        size: {
          value: { min: 3, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  

  return (
    <>
    <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{ width: '100%',height: '100%' }} // Ensure the particles fit the container
      />
    </>
  );
};

function Apresentacao_start() {
  return (
    <>
      <div className="container-ms apresentation-start">
      <App />
        <div style={{
          height: '200px',
        }} className="container-fluid">
        <h1>Design, Criacao e Gerenciamento de sites?</h1>
        <p>
          Você esta no lugar certo, aqui nos iremos dar a acessoria necessaria
          para que você dê os seus primeiros passos na internet.
        </p>
        </div>
      </div>
    </>
  );
}

function Home() {
  return (
    <>
      <header className="container-fluid home-header">
        <Menu />
        <Content_start />
      </header>
    </>
  );
}

export default Home;
