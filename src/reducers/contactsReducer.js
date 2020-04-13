import { FETCH_CONTACTS, FIND_CONTACT } from '../actions/types';

const initialState = {
    contacts: [],
    filteredList: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            };
        case FIND_CONTACT:
            return {
                ...state,
                filteredList: action.payload
            };
        default:
            return state;
    }
}