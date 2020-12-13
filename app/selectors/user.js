import { createSelector } from "reselect";

const getUserAuth = (state) => state.authUser;

export const getisAuth = () => {
    return createSelector(
        [getUserAuth],
        (user = {}) => {
            return user.id ? true : false;
        }
    );
};
