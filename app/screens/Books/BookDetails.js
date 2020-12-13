import React from 'react';
import { Bunner } from "../../combo";
import { Button, ListInfo, Page, BottomNotification } from "../../common";
import { bookDetailsFields } from '../../config/const';

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
}) => (
        <Page footer={item.here ? <Button title="Get it" /> : <BottomNotification notification={getNotification(accept, send, choosen)} />}>
            <Bunner title={item.title} subtitle={item.authorFullName} />
            <ListInfo info={item} fields={bookDetailsFields} />
        </Page>
    );