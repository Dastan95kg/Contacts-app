import React from 'react';
import Item from './Item/Item';

const List = () => {
    return (
        <div className="list__grid">
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
};

export default List;