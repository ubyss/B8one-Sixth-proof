import React from 'react';
import { MinicartItem } from '../../../../interfaces/IProducts';

import trashIcon from './../../../../assets/trash_icon.svg'
import { useUser } from '../../../../context/UserContext';

type MinicartProductCardProps = {
  product: MinicartItem
}

const MinicartProductCard: React.FC<MinicartProductCardProps> = ({ product }) => {
  const { setMinicart, minicart, isOver65, seniorDiscont } = useUser()

  const displayedPrice = isOver65 ? (product.price * seniorDiscont).toFixed(2) : product.price.toFixed(2);


  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>, productId: number) => {
    const newUnits = parseInt(e.target.value, 10);

    const updatedMinicart = minicart.map(item => {
      if (item.id === productId) {
        const newPrice = (item.price / item.units) * newUnits;
        return { ...item, units: newUnits, price: newPrice };
      }

      return item;
    });

    setMinicart(updatedMinicart);
  }

  const handleDelete = () => {
    const updatedMinicart = minicart.filter(item => item.id !== product.id);
    setMinicart(updatedMinicart);
  };

  return (
    <div className="minicart-product-card">
      <img className="minicart-product-card__image" src={product.imageUrl} alt={product.name} />
      <div className="minicart-product-card__right-section">
        <div className="minicart-product-card__details">
          <span className="minicart-product-card__name">{product.name}</span>
        </div>
        <div className="minicart-product-card__actions">
          <span className="minicart-product-card__price">R$ {displayedPrice}</span>
          <select className="minicart-product-card__quantity-selector" value={product.units} onChange={(e) => handleQuantityChange(e, product.id)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button className="minicart-product-card__delete-button" onClick={handleDelete}>
            <img src={trashIcon} alt="delete icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MinicartProductCard;
