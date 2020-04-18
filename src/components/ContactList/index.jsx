import React, { useState } from 'react';
import './ContactList.scss';
import ListHeader from './ListHeader';
import List from './List';

const ContactList = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="list">
            <ListHeader
                setInputValue={setInputValue}
                value={inputValue}
            />
            <List />
        </div>
    );
};

export default ContactList;