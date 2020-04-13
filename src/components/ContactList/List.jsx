import React from 'react';
import Item from './Item/Item';
import { useSelector } from 'react-redux';

const List = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filteredList = useSelector(state => state.contacts.filteredList);

    return (
        <div className="list__grid">
            {filteredList.length === 0 ? contacts.map(item => (
                <Item key={item.id} contact={item} />
            )) : filteredList.map(item => (
                <Item key={item.id} contact={item} />
            ))}
        </div>
    );
};

export default List;