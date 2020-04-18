import React from 'react';
import ItemHeader from './ItemHeader';
import ItemInfo from './ItemInfo';
import ava from '../../../assets/item-ava.png';
import { Link } from 'react-router-dom';

const Item = ({ contact }) => {

    return (
        <div className="list__item">
            <img className="list__item-image" src={ava} alt="profile avatar" />
            <div className="list__item-wrapper">
                <ItemHeader
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                    id={contact.id}
                    favorite={contact.favorite}
                />
                <div className="list__item-content">
                    <ItemInfo
                        city={contact.city}
                        country={contact.country}
                    />
                    <ItemInfo phoneNum={contact.phoneNumber} />
                    <ItemInfo site={contact.website} />
                    <ItemInfo email={contact.email} />
                </div>
                <Link to={'/contact/' + contact.id}>show</Link>
            </div>
        </div>
    );
};

export default Item;