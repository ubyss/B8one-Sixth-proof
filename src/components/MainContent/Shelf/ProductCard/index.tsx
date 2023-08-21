import React, { useState } from 'react';
import { useUser } from '../../../../context/UserContext';
import { Product } from '../../../../interfaces/IProducts';

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { isOver65, setMinicart} = useUser()
    const [selectedWeight, setSelectedWeight] = useState<string>("");

    const quantityPerWeight = parseInt(product.quantityPerWeight.replace('g', ''), 10);
    const weightOptions = Array.from({ length: 5 }, (_, index) => (index + 1) * quantityPerWeight);

    const isButtonDisabled = !selectedWeight;
    const discountedPrice = isOver65 ? (product.price * 0.9).toFixed(2) : product.price;

    const addToCart = () => {
        const selectedWeightInGrams = parseInt(selectedWeight, 10);
        const quantityPerWeightInGrams = parseInt(product.quantityPerWeight.replace("g", ""), 10);
    
        const units = selectedWeightInGrams / quantityPerWeightInGrams;
        const priceForSelectedWeight = (product.price / quantityPerWeightInGrams) * selectedWeightInGrams;
    
        const newItem = {
          id: product.id,
          imageUrl: product.imageUrl,
          name: product.name,
          units,
          price: priceForSelectedWeight,
        };
    
        setMinicart((prevMinicart) => [...prevMinicart, newItem]);
      };

    return (
        <div className="product-card">
            <img className="product-card__image" src={product.imageUrl} alt={product.name} />
            <h2 className="product-card__name">{product.name}</h2>
            {isOver65 && <span className="product-card__list-price--crossed">{`R$ ${product.listPrice.toFixed(2)}`}</span>}
            <div className="product-card__price-container">
                <span className="product-card__price">{`R$ ${discountedPrice}`}</span>
                {isOver65 && <span className="product-card__price--discount">-10%</span>}
            </div>
            <p className="product-card__promotion">Compre 3 leve 2!</p>
            <label className="product-card__label">Selecione o peso</label>
            <select className="product-card__select" onChange={(e) => setSelectedWeight(e.target.value)} value={selectedWeight}>
                <option value="" disabled>Selecione</option>
                {weightOptions.map((weight, index) => (
                    <option key={index} value={weight}>{`${weight} gramas`}</option>
                ))}
            </select>
            <button className="product-card__button" disabled={isButtonDisabled} onClick={addToCart}>Adicionar</button>
        </div>
    );
};

export default ProductCard;
