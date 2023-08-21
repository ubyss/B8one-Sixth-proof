// Header.js

import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-section">
                atomic
            </div>
            <div className="search-section">
                <input type="search" placeholder="O que você procura?" />
                <span className="search-icon">🔍</span>
            </div>
            <div className="account-section">
                <span className="profile-icon">👤</span>
                Minha Conta
            </div>
            <div className="cart-section">
                <button>
                    <span className="cart-icon">🛒</span>
                </button>
            </div>
        </div>
    );
}

export default Header;
