import React from 'react';
import location from '../../../assets/location.png';
import mobile from '../../../assets/smartphone.png';
import world from '../../../assets/internet.png';
import emailImg from '../../../assets/email.png';

const ItemInfo = ({ city, country, phoneNum, site, email }) => {
    return (
        <div className="list__item-content-item">
            {city && country &&
                <>
                    <img src={location} alt="location icon" />
                    <span>{`${city}, ${country}`}</span>
                </>
            }
            {phoneNum &&
                <>
                    <img src={mobile} alt="mobile icon" />
                    <span>{phoneNum}</span>
                </>
            }
            {site &&
                <>
                    <img src={world} alt="globus icon" />
                    <span>{site}</span>
                </>
            }
            {email &&
                <>
                    <img src={emailImg} alt="email icon" />
                    <span>{email}</span>
                </>
            }
        </div>
    );
};

export default ItemInfo;