import React from 'react';
import { useUser } from '../../context/UserContext';

import discountIcon from '../../assets/discount_logo.svg';

const DiscountBanner: React.FC = () => {

  const { isOver65, seniorDiscont } = useUser();

  if(!isOver65) return 
  
  const seniorDiscountPercentage = parseFloat(((1 - seniorDiscont) * 100).toFixed(2)); 

  return (
    <div className="discount-banner">
        <img className="discount-banner__icon" src={discountIcon} alt="Discount Icon" />
      <span className="discount-banner__text">Parabéns, você ativou descontos de {seniorDiscountPercentage}% em todos os produtos do site!</span>
    </div>
  );
};

export default DiscountBanner;
