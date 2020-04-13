import { FETCH_CONTACTS } from './types';
import axios from 'axios';

export const fetchContacts = () => dispatch => {
    axios.get('https://my-json-server.typicode.com/RomanChasovitin/demo-api/users')
        .then(response =>
            dispatch({
                type: FETCH_CONTACTS,
                payload: response.data
            })
        )
        .catch(err => console.log(err));
};