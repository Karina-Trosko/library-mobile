import { CHANGE_CATALOG_CONTENT, UPDATE_BOOK, CHOOSE_BOOK } from './constants';

export const changecatalogContent = (catalogContent) => dispatch => dispatch({
        type: CHANGE_CATALOG_CONTENT,
        catalogContent,
    }
);

export const updateBook = (book) => dispatch => dispatch({
    type: UPDATE_BOOK,
    book,
});

export const chooseBook = (book) => dispatch => dispatch({
    type: CHOOSE_BOOK,
    book,
});