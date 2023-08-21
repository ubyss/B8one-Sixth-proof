import React, { useState } from 'react';
import { useUser } from '../../../../context/UserContext';

type Product = {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    listPrice: number;
    isWeighable: boolean;
};

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { isOver65 } = useUser()
    const [selectedWeight, setSelectedWeight] = useState<string>("");

    const isButtonDisabled = !selectedWeight;

    const discountedPrice = isOver65 ? (product.price * 0.9).toFixed(2) : product.price;

    return (
        <div className="product-card">
            <img className="product-card__image" src={product.imageUrl} alt={product.name} />
            <h2 className="product-card__name">{product.name}</h2>
            {isOver65 && <span className="product-card__list-price--crossed">{`R$ ${product.listPrice.toFixed(2)}`}</span>}
            <div className="product-card__price-container">
                <span className="product-card__price">{`R$ ${discountedPrice}`}</span>
                {isOver65 && <span className="product-card__price--discount">-10%</span>}
            </div>
            <p className="product-card__promotion">Compre 2 leve 2!</p>
            <label className="product-card__label">Selecione o peso</label>
            <select className="product-card__select" onChange={(e) => setSelectedWeight(e.target.value)} value={selectedWeight}>
                <option value="" disabled>Selecione</option>
                <option value="100">100 gramas</option>
                <option value="200">200 gramas</option>
                <option value="300">300 gramas</option>
                <option value="400">400 gramas</option>
                <option value="500">500 gramas</option>
            </select>
            <button className="product-card__button" disabled={isButtonDisabled}>Adicionar</button>
        </div>
    );
};

export default ProductCard;
