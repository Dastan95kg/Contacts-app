import React from 'react';
import ItemHeader from './ItemHeader';
import ItemInfo from './ItemInfo';
import ava from '../../../assets/item-ava.png';

const Item = () => {
    return (
        <div className="list__item">
            <img className="list__item-image" src={ava} alt="profile avatar" />
            <div className="list__item-wrapper">
                <ItemHeader />
                <div className="list__item-content">
                    <ItemInfo />
                    <ItemInfo />
                    <ItemInfo />
                    <ItemInfo />
                </div>
                <button type="button">show</button>
            </div>
        </div>
    );
};

export default Item;