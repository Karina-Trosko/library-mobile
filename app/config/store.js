import { connect } from 'react-redux';
import { createStore } from 'redux';
import { CHANGE_CATALOG_CONTENT, SETUP_AUTH_USER, SET_USER_REQUESTS, UPDATE_BOOK,
    CHOOSE_BOOK,
} from '../actions/constants';

function mainReducer(state = 0, action) {
    switch (action.type) {
        case CHANGE_CATALOG_CONTENT:
            return { ...state, catalogContent: action.catalogContent }
        case SETUP_AUTH_USER:
            return { ...state, authUser: action.authUser }
        case SET_USER_REQUESTS:
            return { ...state, requests: action.requests }
        case UPDATE_BOOK:
            return {...state, catalogContent: Array.isArray(state.catalogContent) ? state.catalogContent?.map(e => e.id === action.book?.id ? action.book : e) : state.catalogContent }
        case CHOOSE_BOOK:
            return {...state, catalogContent: Array.isArray(state.catalogContent) ? state.catalogContent?.map(e => e.id === action.book?.id ? action.book : e) : state.catalogContent }
        default:
            return state;
    }
}
export let store = createStore(mainReducer);
store.subscribe(() => console.log(store.getState()))

export const register = (component, propsObject) => connect(
    (state, props) => {
        const result = {};

        for (const [key, value] of Object.entries(propsObject)) {
            result[key] = value(state, props);
        }
        return result;
    }
)(component);