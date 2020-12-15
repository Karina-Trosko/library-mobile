import { createSelector } from "reselect";

const getUserAuth = (state) => state.authUser;
const getUserRequests = (state) => state.requests;

export const getisAuth = createSelector(
    [getUserAuth],
    (user = {}) => user.id ? true : false
);

export const getRequests = createSelector(
    [getUserRequests],
    (requests = []) => requests.map(e => ({
        date: e.date,
        accept: e.accept,
        send: e.send,
        valid: e.valid,
        title: e.book?.title,
        author: `${e.book?.author?.firstName} ${e.book?.author?.secondName}`,
        book: {
            ...e.book,
            authorFullName: `${e.book?.author?.firstName} ${e.book?.author?.secondName}`,
            genre: e.book?.genre?.name,
            literatureType: e.book?.literatureType?.name,
        },
        id: e.id,
        formatedDate: e.date ? e.date.split(' ')[0] : '',
    })
    )
);
