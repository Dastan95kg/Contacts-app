import React from 'react';
import logo from '../../assets/Vector.png';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header__title">
                <div className="header__title-img">
                    <img src={logo} alt="Logo icon" />
                </div>
                <div className="header__title-description">MyContacts</div>
            </div>
        </header>
    );
};

export default Header;