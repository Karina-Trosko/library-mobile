import React from 'react';
import { useSelector } from 'react-redux';
import actions from '../../actions';
import { Bunner } from "../../combo";
import { Button, ListInfo, Page, BottomNotification } from "../../common";
import { bookDetailsFields } from '../../config/const';
import { getBook } from '../../selectors/books';
import { getUsername } from '../../selectors/user';
import { bookApi } from '../../services/api';

const getNotification = ( accept, send, choosen) => {
    if (accept) {
        return `This book is on your hands, take care of it and won't forget to give it back`;
    } else if (send) {
        return `This book is waiting approval, for more information please ask librarian`;
    } else if (choosen) {
        return `You select this book as wanted, please send the request as soon as possible. Otherwise your selection will be canceled.`
    }
    return 'Book is not available';
}

export const BookDetails = ({
    navigation,
    item = navigation?.getParam('item', {}),
    accept = navigation?.getParam('accept', false),
    send = navigation?.getParam('send', false),
    choosen = navigation?.getParam('choosen', false),
}) => {
    const username = useSelector(getUsername);
    let book = useSelector(getBook(item?.id));
    console.log('book: ', book);
    if (!book) {
        book = {...item};
    }
    return (
        <Page footer={book.here ? <Button title="Get it" onPress={() => {
            bookApi.chooseBook(book?.id, username,  (res) => actions.chooseBook(res));
        }} /> : choosen ? <Button title="Send" onPress={() => {
            bookApi.chooseBook(book?.id, username,  (res) => actions.chooseBook(res));
        }} /> : <BottomNotification notification={getNotification(accept, send, choosen)} />}>
            <Bunner title={book.title} subtitle={book.authorFullName} />
            <ListInfo info={book} fields={bookDetailsFields} />
        </Page>
    )};