import { SETUP_AUTH_USER, SET_USER_REQUESTS } from './constants';

export const setupAuthUser = (authUser) => dispatch => dispatch({
    type: SETUP_AUTH_USER,
    authUser,
}
);

export const setRequests = (requests) => dispatch => dispatch({
    type: SET_USER_REQUESTS,
    requests
}); 