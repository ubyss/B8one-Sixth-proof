import {useState} from 'react';
import logo from '../../assets/logo.svg';
import minicartIcon from '../../assets/minicart_icon.svg';
import accountIcon from '../../assets/account_icon.svg';
import searchIcon from '../../assets/search_icon.svg';
import CategorySection from './CategorySection';
import DiscountBanner from '../DiscountBanner';
import MiniCart from './Minicart';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


    return (
        <>
        <div className="header">
            <div className="logo-section">
            <img className="logo-section__icon" src={logo} alt="Grocery.Store Logo" />
            </div>
            <div className="search-section">
            <div className="search-section__wrapper">
                <input className="search-section__input" type="search" placeholder="Olá! O que você precisa encontrar hoje?" />
                <img className="search-section__icon" src={searchIcon} alt="Search icon" />
            </div>
            </div>
            <div className="account-section">
                <img className="account-section__icon" src={accountIcon} alt="Account icon" />
                Acessar minha conta
            </div>
            <div className="cart-section">
                <button onClick={() => setIsOpen(true)}>
                    <img className="cart-section__icon" src={minicartIcon} alt="Grocery.Store Logo" />
                </button>
            </div>
        </div>
        <CategorySection />
        <DiscountBanner />
        <MiniCart 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            />
        </>
    );
}

export default Header;
