import './portfolio.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Portfolio(){
    return (
        <>
            <section id='portfolio-section' className='container-fluid' >
                <div id='portfolio-background' style={{margin: '100px 0',minHeight: '600px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.4)', height: 'auto', backgroundColor: 'white', padding: '0'}} className="container-md">
                <div id='portfolio-header' style={{height: '100px'}} className="container-fluid">
                    <h1>Portfolio</h1>
                    <p>Aqui estão alguns exemplos de projectos desenvolvidos por nos</p>
                </div>
                <div id="container-portfolio" className="row">
                    <div id='potfolio-examples' className="col-sm-3">
                        <div id="portfolio-examples-content">

                        </div>
                        <button>Demo</button>
                    </div>
                    <div id='potfolio-examples' className="col-sm-3">
                        <div id="portfolio-examples-content">

                        </div>
                        <button>Demo</button>
                    </div>
                    <div id='potfolio-examples' className="col-sm-3">
                        <div id="portfolio-examples-content">

                        </div>
                        <button>Demo</button>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}
export default Portfolio;