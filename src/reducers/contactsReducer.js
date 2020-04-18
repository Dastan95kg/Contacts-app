import {
    FETCH_CONTACTS, FIND_CONTACT,
    DESCENDING_SORT, SET_ACTIVE_CONTACT,
    CHANGE_CONTACT, TOGGLE_FAVORITE,
    SHOW_FAVORITE_LIST,
    ASCENDING_SORT
} from '../actions/types';
import { createStore } from 'redux';

const initialState = {
    contacts: [],
    filteredList: [],
    activeContact: null,
    favoriteList: [],
    descendingSort: [],
    ascendingSort: []
};

function reducer(state = initialState, action) {
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
        case DESCENDING_SORT:
            return {
                ...state,
                descendingSort: action.payload
            };
        case ASCENDING_SORT:
            return {
                ...state,
                ascendingSort: action.payload
            };
        case SET_ACTIVE_CONTACT:
            return {
                ...state,
                activeContact: action.payload
            };
        case CHANGE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(item => {
                    if (item.id === action.payload.id) {
                        item = action.payload;
                        return item;
                    }
                    return item;
                })
            };
        case TOGGLE_FAVORITE:
            const newList = state.contacts.map(item => {
                if (item.id === action.payload.id) {
                    item.favorite = action.payload.checked;
                }
                return item;
            });
            return { ...state, contacts: newList };
        case SHOW_FAVORITE_LIST:
            return {
                ...state,
                favoriteList: action.payload
            };
        default:
            return state;
    }
}

export const store = createStore(reducer, initialState, window.devToolsExtension());