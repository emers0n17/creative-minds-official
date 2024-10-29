import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Planes.css";
import certo from '../../assets/check.png';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Planes() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  
  const plans = [
    {
      name: "Pacote Starter",
      icon: "🚀",
      features: [
        "Criação de Logotipo Profissional",
        "Setup Inicial de Redes Sociais",
        "3 Posts Semanais por 1 mês",
        "Relatório Mensal de Desempenho"
      ],
      price: "15,000MZN",
      discountPrice: "13,500MZN",
      discount: "10%",
      recommended: false
    },
    {
      name: "Pacote Business",
      icon: "⭐",
      features: [
        "Tudo do Pacote Starter",
        "Website Profissional",
        "5 Posts Semanais por 3 meses",
        "Gestão de Anúncios (Budget não incluso)",
        "Consultoria de Marketing Digital",
        "Suporte Prioritário"
      ],
      price: "45,000MZN",
      discountPrice: "40,500MZN",
      discount: "10%",
      recommended: true
    },
    {
      name: "Pacote Enterprise",
      icon: "👑",
      features: [
        "Tudo do Pacote Business",
        "E-commerce Completo",
        "Estratégia de Marketing Personalizada",
        "Gestão de Conteúdo por 6 meses",
        "SEO Avançado",
        "Relatórios Semanais",
        "Suporte 24/7"
      ],
      price: "75,000MZN",
      discountPrice: "67,500MZN",
      discount: "10%",
      recommended: false
    }
  ];

  const sendEmail = async (planName, planPrice) => {
    setLoading(true);
    
    // Pedir email do usuário
    const userEmail = prompt('Por favor, digite seu email para contato:');
    if (!userEmail) {
      setLoading(false);
      return;
    }

    try {
      const templateParams = {
        plan_name: planName,
        plan_price: planPrice,
        to_email: userEmail, // Email do usuário
        from_name: 'Website Paisana',
      };

      await emailjs.send(
        'service_nmm1oxq',
        'template_b1gfjfp',
        templateParams,
        '_OalXyyj1XauVN6KC'
      );

      toast.success('Interesse registrado! Entraremos em contato em breve.');
    } catch (error) {
      console.error('Erro:', error);
      toast.error('Erro ao enviar. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="fundo-plane" className="py-5">
      <ToastContainer />
      <div className="container">
        <h2 className="text-center mb-5">Nossos Pacotes</h2>
        <div className="row">
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className={`plan-card ${plan.recommended ? 'recommended' : ''}`}>
                <div className="plan-icon">{plan.icon}</div>
                <h3>{plan.name}</h3>
                <div className="price-container">
                  <span className="original-price">{plan.price}</span>
                  <span className="discount-price">{plan.discountPrice}</span>
                  <span className="discount-badge">{plan.discount} OFF</span>
                </div>
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <img src={certo} alt="check" className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="select-plan-btn"
                  onClick={() => sendEmail(plan.name, plan.discountPrice)}
                  disabled={loading}
                >
                  {loading ? 'Processando...' : 'Selecionar Plano'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Planes;
