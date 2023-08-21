import React from 'react';
import ReactDOM from 'react-dom';
import { useUser } from '../../../context/UserContext';
import { MinicartItem } from '../../../interfaces/IProducts';

import closeIcon from './../../../assets/close_icon.svg'
import MinicartProductCard from './MinicartProductCard';

type MiniCartProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const MiniCart: React.FC<MiniCartProps> = ({ isOpen, setIsOpen }) => {

  const { minicart, isOver65, seniorDiscont } = useUser();


  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  const subtotal = isOver65 ? minicart.reduce((acc, item) => acc + item.price, 0) * seniorDiscont : minicart.reduce((acc, item) => acc + item.price, 0);

  return ReactDOM.createPortal(
    <>
      <div className="minicart__overlay" onClick={handleClose}></div>
      <div className="minicart__content">
        <div className="minicart__header">
          <h2 className="minicart__header-title">Minhas compras</h2>
          <button className="minicart__header-close" onClick={handleClose}>
            <img src={closeIcon} alt="delete icon" />
          </button>
        </div>
        <div className="minicart__items">
          {minicart.map((item: MinicartItem, index: number) => (
            <MinicartProductCard product={item} key={index} />
          ))}
        </div>
        <div className="minicart__summary">
        <div className="minicart__subtotal-container">
          <span className="minicart__subtotal-text">Subtotal</span>
          <span className="minicart__subtotal-value">R$ {subtotal.toFixed(2)}</span>
        </div>
        <button className="minicart__goto-cart-button">Ir para o carrinho</button>
      </div>
      </div>
    </>,
    document.body
  );
};

export default MiniCart;
