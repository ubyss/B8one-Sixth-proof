import React, { useState, useEffect } from 'react';
import { useUser } from '../../../../context/UserContext';
import { Product } from '../../../../interfaces/IProducts';

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { isOver65, setMinicart, seniorDiscont} = useUser()
    const [selectedWeight, setSelectedWeight] = useState<string>("");

    const quantityPerWeight = parseInt(product.quantityPerWeight.replace('g', ''), 10);
    const weightOptions = Array.from({ length: 5 }, (_, index) => (index + 1) * quantityPerWeight);

    const isButtonDisabled = !selectedWeight;
    const [discountedPrice, setDiscountedPrice] = useState<number>(product.listPrice);

    useEffect(() => {
        if(isOver65) setDiscountedPrice(product.price * seniorDiscont)
    }, [isOver65])

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
          seller: product.seller,
        };
    
        setMinicart((prevMinicart) => [...prevMinicart, newItem]);
      };

      const handleWeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedWeightInGrams = parseInt(e.target.value, 10);
        const quantityPerWeightInGrams = parseInt(product.quantityPerWeight.replace("g", ""), 10);
    
        const newPrice = (product.price / quantityPerWeightInGrams) * selectedWeightInGrams;
    
        const newDiscountedPrice = isOver65 ? newPrice * seniorDiscont : newPrice;
    
        setSelectedWeight(e.target.value);
        setDiscountedPrice(newDiscountedPrice);
    };
    
    const displayPercentage = parseFloat(((1 - seniorDiscont) * 100).toFixed(2)); 

    return (
        <div className="product-card">
            <img className="product-card__image" src={product.imageUrl} alt={product.name} />
            <h2 className="product-card__name">{product.name}</h2>
            {isOver65 && <span className="product-card__list-price--crossed">{`R$ ${product.listPrice.toFixed(2)}`}</span>}
            <div className="product-card__price-container">
                <span className="product-card__price">{`R$ ${discountedPrice.toFixed(2)}`}</span>
                {isOver65 && <span className="product-card__price--discount">-{displayPercentage}%</span>}
            </div>
            <p className="product-card__promotion">Compre 3 leve 2!</p>
            <label className="product-card__label">Selecione o peso</label>
            <label className="select-wrapper">
                <select className="product-card__select" onChange={handleWeightChange} value={selectedWeight}>
                    <option value="" disabled>Selecione</option>
                    {weightOptions.map((weight, index) => (
                        <option key={index} value={weight}>{`${weight} gramas`}</option>
                    ))}
                </select>
            </label>
            <button className="product-card__button" disabled={isButtonDisabled} onClick={addToCart}>Adicionar</button>
        </div>
    );
};

export default ProductCard;
