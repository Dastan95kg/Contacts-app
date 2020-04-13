import React, { useEffect, useState } from 'react';
import './ContactList.scss';
import ListHeader from './ListHeader';
import List from './List';
import axios from 'axios';
import { FETCH_CONTACTS } from '../../actions/types';
import { useDispatch } from 'react-redux';

const ContactList = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/RomanChasovitin/demo-api/users')
            .then(response => dispatch({
                type: FETCH_CONTACTS,
                payload: response.data.data
            })
            )
            .then(({ payload }) => {
                const serializeObj = JSON.stringify(payload);
                localStorage.setItem('data', serializeObj);
            })
            .catch(err => console.log(err));
    }, []);

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