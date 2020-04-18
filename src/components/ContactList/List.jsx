import React from 'react';
import Item from './Item/Item';
import { useSelector } from 'react-redux';

const List = () => {
    const contacts = useSelector(state => state.contacts);
    const filteredList = useSelector(state => state.filteredList);
    const favoriteList = useSelector(state => state.favoriteList);
    const descendingSort = useSelector(state => state.descendingSort);
    const ascendingSort = useSelector(state => state.ascendingSort);

    return (
        <div className="list__grid">
            {filteredList.length !== 0 ? filteredList.map(item => (
                <Item key={item.id} contact={item} />
            ))
                : favoriteList.length !== 0 ?
                    favoriteList.map(item => (
                        <Item key={item.id} contact={item} />
                    ))
                    : descendingSort.length !== 0 ?
                        descendingSort.map(item => (
                            <Item key={item.id} contact={item} />
                        ))
                        : ascendingSort.length !== 0 ?
                            ascendingSort.map(item => (
                                <Item key={item.id} contact={item} />
                            ))
                            : contacts.map(item => (
                                <Item key={item.id} contact={item} />
                            ))}
        </div>
    );
};

export default List;