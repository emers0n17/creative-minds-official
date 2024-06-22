import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Planes.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import certo from '../../assets/certo.png'

function Planes() {
  return (
    <>
      <div
        id="planes-section"
        style={{
          minHeight: "1500px", height: 'auto'
        }}
        className="container-fluid bg-black"
      >
        <div className="container-md">
          <div id="planes-row" style={{ height: "1000px" }} className="row">
            <div id="planes-div" style={{ border: "1px solid black", height: "400px" }} className="col-sm-4"
            >
                <div id="planes-body">
                    <h1>Site</h1>
                    <div id="planes-body-list">
                        <ul>
                
                            <li> <p>site estatico <img src={certo} alt="" /></p>  </li>
                            <li> <p>Blog <img src={certo} alt="" /></p>  </li>
                            <li> <p>Aplicacao web <img src={certo} alt="" /></p> </li>
                        </ul>
                    </div>
                    <button id="precos-card">
                        Contratar
                    </button>
                </div>
            </div>
            <div id="planes-div" style={{ border: "1px solid black", height: "400px" }} className="col-sm-4"
            >
                                <div id="planes-body">
                    <h1>Disign.</h1>
                    <div id="planes-body-list">
                        <ul>
                
                            <li> <p>site estatico <img src={certo} alt="" /></p>  </li>
                            <li> <p>Blog <img src={certo} alt="" /></p>  </li>
                            <li> <p>Aplicacao web <img src={certo} alt="" /></p> </li>
                        </ul>
                    </div>
                    <button id="precos-card">
                        Contratar
                    </button>
                </div>
            </div>
            <div id="planes-div" style={{ border: "1px solid black", height: "400px" }} className="col-sm-4"
            >
                                <div id="planes-body">
                    <h1>Marketing.</h1>
                    <div id="planes-body-list">
                        <ul>
                
                            <li> <p>site estatico <img src={certo} alt="" /></p>  </li>
                            <li> <p>Blog <img src={certo} alt="" /></p>  </li>
                            <li> <p>Aplicacao web <img src={certo} alt="" /></p> </li>
                        </ul>
                    </div>
                    <button id="precos-card">
                        Contratar
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Planes;
