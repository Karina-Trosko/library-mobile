import React from 'react';
import { Bunner } from "../../combo";
import { Button, ListInfo, Page, BottomNotification } from "../../common";
import { bookDetailsFields } from '../../config/const';

const exampleBookData = JSON.parse('{"literatureType":"Fiction","here":false,"yearOfPublishing":2014,"author":{"firstName":"Jack","books":[],"id":4,"secondName":"London"},"genre":"Realism","publishingHouse":"Azbyka","onlyInReadingRoom":false,"numbOfPages":357,"id":13,"title":"Son of the wolf"}');

export const BookDetails = ({ navigation, item = navigation?.getParam('item', {}) }) => (
    <Page footer={true ? <Button title="Get it" /> : <BottomNotification notification="Get it" />}>
        <Bunner title={item.title} subtitle={item.authorFullName} />
        <ListInfo info={item} fields={bookDetailsFields} />
    </Page>
);