import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';

export default combineReducers({
    contacts: contactsReducer
});

// const FETCH_CONTACTS = 'FETCH_CONTACTS';
// const initialState = {   
//     id: null,
//     firstName: '',
//     lastName: '',
//     city: '',
//     country: '',
//     phoneNumber: '',
//     email: '',
//     website: '',
//     image: null
// };