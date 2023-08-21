import logo from '../../assets/logo.svg';
import minicartIcon from '../../assets/minicart_icon.svg';
import accountIcon from '../../assets/account_icon.svg';
import searchIcon from '../../assets/search_icon.svg';
import CategorySection from './CategorySection';

const Header = () => {
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
                <button>
                    <img className="cart-section__icon" src={minicartIcon} alt="Grocery.Store Logo" />
                </button>
            </div>
        </div>
        <CategorySection />
        </>
    );
}

export default Header;
