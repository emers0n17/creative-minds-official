import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Planes.css";
import certo from '../../assets/check_14025690.png';
// import './email.js'

function Planes() {
  const plans = [
    {
      name: "Pacote Iniciante",
      features: [
        "Criação de Logotipo e Identidade Visual",
        "Gestão de Redes Sociais (1 mês)",
        "Campanhas Publicitárias Online (1 mês)"
      ],
      price: "13,000MZN",
      discountPrice: "12,350MZN",
      discount: "5%"
    },
    {
      name: "Pacote Intermediário",
      features: [
        "Criação de Logotipo e Identidade Visual",
        "Gestão de Redes Sociais (3 meses)",
        "Desenvolvimento de Website",
        "Campanhas Publicitárias Online (3 meses)"
      ],
      price: "44,000MZN",
      discountPrice: "40,920MZN",
      discount: "7%"
    },
    {
      name: "Pacote Avançado",
      features: [
        "Criação de Logotipo e Identidade Visual",
        "Gestão de Redes Sociais (6 meses)",
        "Desenvolvimento de Website",
        "Campanhas Publicitárias Online (6 meses)",
        "Consultoria de Marketing",
        "Branding"
      ],
      price: "78,000MZN",
      discountPrice: "70,200MZN",
      discount: "10%"
    },
    {
      name: "Pacote Premium",
      features: [
        "Criação de Logotipo e Identidade Visual",
        "Gestão de Redes Sociais (12 meses)",
        "Desenvolvimento de Website",
        "Campanhas Publicitárias Online (12 meses)",
        "Consultoria de Marketing",
        "Branding",
        "Estratégia de Marketing Digital",
        "Produção de Conteúdo",
        "Relações Públicas (12 meses)"
      ],
      price: "169,000MZN",
      discountPrice: "143,650MZN",
      discount: "15%"
    }
  ];

  return (
    <div id="fundo-plane" className="container-fluid text-light py-5">
      <div  className="container">
        <h2 className="text-center mb-5">Pacote de Campanha de Publicidade</h2>
        <div className="row">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div id="planes-card" className="card bg-secondary text-light shadow-sm h-100">
                <div id="planes-card-header" className="card-header text-center">
                  <h4>{plan.name}</h4>
                </div>
                <div id="planes-card-body" className="card-body">
                  <ul className="list-unstyled">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        <img style={{width: '15px'}} src={certo} alt="certo" className="me-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div id="planes-card-footer" className="card-footer text-center">
                  <p id="plane-price-before" className="mb-1"><del>{plan.price}</del></p>
                  <h4 id="plane-price-after">{plan.discountPrice}</h4>
                  <p className="mb-3">Desconto de {plan.discount}</p>
                  <button className="btn btn-primary">
                    Contratar
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center my-5">
  <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#customPackageModal">
    Criar Pacote Personalizado
  </button>
</div>
  {/* Modal */}
  <div className="modal fade" id="customPackageModal" tabIndex="-1" aria-labelledby="customPackageModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content bg-dark text-light">
      <div className="modal-header">
        <h5 className="modal-title" id="customPackageModalLabel">Pacote Personalizado</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form id="customPackageForm">
          <div className="mb-3">
            <label htmlFor="customName" className="form-label">Nome do Pacote</label>
            <input type="text" className="form-control" id="customName" required />
          </div>
          <div className="mb-3">
            <label htmlFor="customFeatures" className="form-label">Funcionalidades</label>
            <textarea className="form-control" id="customFeatures" rows="3" required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="customPrice" className="form-label">Preço</label>
            <input type="text" className="form-control" id="customPrice" required />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="submit" form="customPackageForm" className="btn btn-primary">Enviar Pacote</button>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );


}


export default Planes;
