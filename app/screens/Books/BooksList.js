import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Page, Title, SubTitle, Seporator } from '../../common';
import { register } from '../../config/store';
import { getContent } from '../../selectors/books';
import { list } from '../../styles';

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
    }
);