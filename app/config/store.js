import { connect } from 'react-redux';
import { createStore } from 'redux';
import { CHANGE_CATALOG_CONTENT, SETUP_AUTH_USER } from '../actions/constants';

function mainReducer(state = 0, action) {
    switch (action.type) {
        case CHANGE_CATALOG_CONTENT:
            return { ...state, catalogContent: action.catalogContent }
        case SETUP_AUTH_USER:
            return { ...state, authUser: action.authUser }
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