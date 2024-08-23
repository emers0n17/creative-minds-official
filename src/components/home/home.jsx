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
          value: '#f4fcec',
        },
        links: {
          color: '#f4fcec',
          distance: 130,
          enable: true,
          opacity: 0.7,
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
          type: 'circle',
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
        <h1><span id="span-branco">Agência</span> <span id="span-verde">Paisana</span></h1>
        <p>
        A Paisana é a agência que vai te ajudar a alcançar seus objetivos de <span id="span-verde">marketing</span> e impulsionar o seu negócio. 
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
