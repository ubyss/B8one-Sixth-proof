// MinicartProductCard.tsx
import React from 'react';
import { MinicartItem } from '../../../../interfaces/IProducts';

import trashIcon from'./../../../../assets/trash_icon.svg'

type MinicartProductCardProps = {
  product: MinicartItem
}

const MinicartProductCard: React.FC<MinicartProductCardProps> = ({ product }) => {

  return (
<div className="minicart-product-card">
  <img className="minicart-product-card__image" src={product.imageUrl} alt={product.name} />
  <div className="minicart-product-card__right-section">
    <div className="minicart-product-card__details">
      <span className="minicart-product-card__name">{product.name}</span>
    </div>
    <div className="minicart-product-card__actions">
      <span className="minicart-product-card__price">R$ {product.price.toFixed(2)}</span>
      <select className="minicart-product-card__quantity-selector">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button className="minicart-product-card__delete-button">
        <img src={trashIcon} alt="delete icon" />
      </button>
    </div>
  </div>
</div>
  );
}

export default MinicartProductCard;
