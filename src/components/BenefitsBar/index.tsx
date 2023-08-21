import discountIcon from '../../assets/tag-icon.svg';
import productIcon from '../../assets/start-icon.svg';
import deliveryIcon from '../../assets/fast-icon.svg';
import paymentIcon from '../../assets/credit-card-icon.svg';


const BenefitsBar = () => {
    const benefits = [
      { text: "Descontos todos os dias!", icon: discountIcon },
      { text: "Maior variedade de produtos frescos e naturais", icon: productIcon },
      { text: "Entrega rápida para a Grande São Paulo", icon: deliveryIcon },
      { text: "Pagamento seguro no PIX e Cartão", icon: paymentIcon },
    ];
  
    return (
      <div className="benefits-bar">
        <ul className="benefits-bar__list">
          {benefits.map((benefit, index) => (
            <li key={index} className="benefits-bar__item">
              <img src={benefit.icon} alt={`${benefit.text} icon`} className="benefits-bar__icon"/>
              <span className="benefits-bar__text">{benefit.text}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BenefitsBar;
  