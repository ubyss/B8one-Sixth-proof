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

  const { minicart } = useUser();

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

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
      </div>
    </>,
    document.body
  );
};

export default MiniCart;
