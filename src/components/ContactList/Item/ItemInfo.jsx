import React from 'react';
import location from '../../../assets/location.png';
import mobile from '../../../assets/smartphone.png';
import world from '../../../assets/internet.png';
import email from '../../../assets/email.png';

const ItemInfo = () => {
    return (
        <div className="list__item-content-item">
            <img src={location} alt="location icon" />
            <span>Bishkek city, Kyrgyzstan</span>
        </div>
    );
};

export default ItemInfo;