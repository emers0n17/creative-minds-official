import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Planes.css";
import certo from '../../assets/check_14025690.png';
import emailjs from 'emailjs-com'; // Importando o emailjs
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'; // Importando Modal do Bootstrap

function Planes() {
  // Pacotes disponíveis
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
    },
    {
      name: "Pacote Personalizado",
      features: [
        "Escolha os serviços que deseja!"
      ],
      price: "Personalizado",
      discountPrice: "Personalizado",
      discount: "-"
    }
  ];

  // Serviços disponíveis para o plano personalizado
  const services = [
    { name: "Criação de Logotipo e Identidade Visual", price: 3000 },
    { name: "Gestão de Redes Sociais (1 mês)", price: 4000 },
    { name: "Campanhas Publicitárias Online (1 mês)", price: 6000 },
    { name: "Desenvolvimento de Website", price: 15000 },
    { name: "Consultoria de Marketing", price: 8000 },
    { name: "Branding", price: 5000 },
    { name: "Estratégia de Marketing Digital", price: 10000 },
    { name: "Produção de Conteúdo", price: 7000 },
    { name: "Relações Públicas (12 meses)", price: 12000 }
  ];

  const [selectedServices, setSelectedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Função para abrir o modal do plano personalizado
  const handlePersonalizedPlan = () => {
    setSelectedServices([]);
    setTotalPrice(0);
    setShowModal(true);
  };

  // Função para lidar com a seleção de serviços
  const handleServiceSelect = (service) => {
    const isSelected = selectedServices.find(s => s.name === service.name);
    if (isSelected) {
      setSelectedServices(selectedServices.filter(s => s.name !== service.name));
      setTotalPrice(totalPrice - service.price);
    } else {
      setSelectedServices([...selectedServices, service]);
      setTotalPrice(totalPrice + service.price);
    }
  };

  // Função para enviar os dados por email
  const handleSubmit = (plan) => {
    const templateParams = {
      selected_plan: plan.name,
      selected_services: selectedServices.map(s => s.name).join(', ') || plan.features.join(', '),
      total_price: plan.name === "Pacote Personalizado" ? totalPrice + "MZN" : plan.discountPrice,
      email: 'emersoncovane23@gmail.com'
    };

    emailjs.send('service_id', 'template_id', templateParams, 'user_id')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });
    setShowModal(false);
  };

  return (
    <div id="fundo-plane" className="container-fluid text-light py-5">
      <div className="container">
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
                  <button className="btn btn-primary" onClick={() => {
                    if (plan.name === "Pacote Personalizado") {
                      handlePersonalizedPlan();
                    } else {
                      handleSubmit(plan);
                    }
                  }}>
                    Contratar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para Pacote Personalizado */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Escolha os Serviços</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {services.map((service, index) => (
            <div key={index} className="form-check">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id={`service-${index}`} 
                onChange={() => handleServiceSelect(service)}
                checked={!!selectedServices.find(s => s.name === service.name)}
              />
              <label className="form-check-label" htmlFor={`service-${index}`}>
                {service.name} - {service.price}MZN
              </label>
            </div>
          ))}
          <div className="mt-3">
            <h5>Total: {totalPrice}MZN</h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => handleSubmit({ name: "Pacote Personalizado", discountPrice: totalPrice + "MZN" })}>
            Confirmar Seleção
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Planes;
