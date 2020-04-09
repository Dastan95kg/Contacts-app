import React from 'react';
import './ContactList.scss';
import ListHeader from './ListHeader';
import List from './List';

const ContactList = () => {
    return (
        <div className="list">
            <ListHeader />
            <List />
        </div>
    );
};

export default ContactList;