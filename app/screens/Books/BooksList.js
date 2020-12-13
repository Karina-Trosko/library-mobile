import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Page, Title, SubTitle, Seporator } from '../../common';
import { register } from '../../config/store';
import { getContent } from '../../selectors/books';
import { list } from '../../styles';

// Remove after added getting real data from api
const exampleData = JSON.parse('[{"literatureType":{"books":[],"name":"Fiction","id":1},"here":false,"yearOfPublishing":2017,"author":{"firstName":"Jack","books":[],"id":4,"secondName":"London"},"genre":{"books":[],"name":"Fantasy","id":1},"publishingHouse":"ACT","onlyInReadingRoom":false,"numbOfPages":256,"id":12,"title":"Love of life"},{"literatureType":{"books":[],"name":"Fiction","id":1},"here":false,"yearOfPublishing":2014,"author":{"firstName":"Jack","books":[],"id":4,"secondName":"London"},"genre":{"books":[],"name":"Realism","id":10},"publishingHouse":"Azbyka","onlyInReadingRoom":false,"numbOfPages":357,"id":13,"title":"Son of the wolf"},{"literatureType":{"books":[],"name":"Fiction","id":1},"here":false,"yearOfPublishing":2007,"author":{"firstName":"Jack","books":[],"id":4,"secondName":"London"},"genre":{"books":[],"name":"Realism","id":10},"publishingHouse":"Xmo","onlyInReadingRoom":false,"numbOfPages":150,"id":15,"title":"The Scarlet Plague "},{"literatureType":{"books":[],"name":"Fiction","id":1},"here":true,"yearOfPublishing":1999,"author":{"firstName":"Joanne","books":[],"id":7,"secondName":"Rowling"},"genre":{"books":[],"name":"Fantasy","id":1},"publishingHouse":"POSMEN","numbOfPages":526,"id":16,"title":"Harry Potter"},{"literatureType":{"books":[],"name":"Fiction","id":1},"here":true,"yearOfPublishing":2014,"author":{"firstName":"Oscar","books":[],"id":5,"secondName":"Wilde"},"genre":{"books":[],"name":"Mystic","id":2},"publishingHouse":"Azbyka","numbOfPages":253,"id":17,"title":"The picture of Dorian Gray"},{"literatureType":{"books":[],"name":"Fiction","id":1},"here":false,"yearOfPublishing":2013,"author":{"firstName":"Brandon","books":[],"id":6,"secondName":"Sanderson"},"genre":{"books":[],"name":"Fantasy","id":1},"publishingHouse":"ClubSemeinogoDosyga","numbOfPages":1113,"id":18,"title":"The way of kings"},{"literatureType":{"books":[],"name":"Reference","id":5},"here":true,"yearOfPublishing":1888,"author":{"firstName":"Brandon","books":[],"id":6,"secondName":"Sanderson"},"genre":{"books":[],"name":"Fairytale","id":4},"publishingHouse":"sdfghjkl","onlyInReadingRoom":true,"numbOfPages":344,"id":21,"title":"sdfghjkl"}]');
// const exampleBookData = JSON.parse('{"literatureType":{"books":[],"name":"Fiction","id":1},"here":false,"yearOfPublishing":2014,"author":{"firstName":"Jack","books":[],"id":4,"secondName":"London"},"genre":{"books":[],"name":"Realism","id":10},"publishingHouse":"Azbyka","onlyInReadingRoom":false,"numbOfPages":357,"id":13,"title":"Son of the wolf"}');

const BooksListItem = ({ item: { title, yearOfPublishing, authorFullName } = {}, onPress }) => (
    <TouchableOpacity style={list.listItem} onPress={onPress}>
        <Title>{title}</Title>
        <SubTitle>{authorFullName}</SubTitle>
        <SubTitle>{yearOfPublishing}</SubTitle>
    </TouchableOpacity>
);

export const BooksList = register(({ books, navigation }) => (
    <Page noScroll>
        <FlatList
            data={books}
            renderItem={({ item }) => <BooksListItem item={item} onPress={() => navigation.navigate('BookDetails', { item })} />}
            keyExtractor={(item) => String(item.id)}
            ItemSeparatorComponent={() => <Seporator />}
        />
    </Page>
),
    {
        books: getContent
    });