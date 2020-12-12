import React from 'react';
import { View, SectionList } from "react-native";
import { Page, SubTitle, Title, Seporator } from "../../common";
import { account } from '../../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = [{
    id: '1',
    title: 'bookq',
    author: 'Jack Londan',
    date: '09-09-1009',
}, {
    id: '2',
    title: 'bookq',
    author: 'Jack Londan',
    date: '09-09-1009',
}, {
    id: '3',
    title: 'bookq',
    author: 'Jack Londan',
    date: '09-09-1009',
}];

const RequestItem = ({ item: { title, author, date } = {} }) => (
    <TouchableOpacity style={account.request}>
        <SubTitle>{title}</SubTitle>
        <SubTitle>{author}</SubTitle>
        {date ? <SubTitle>{date}</SubTitle> : null}
    </TouchableOpacity>
);

const RequestsList = ({ data }) => (
    <SectionList
        sections={[
            {
                title: 'Выданные',
                data
            },
            {
                title: 'Запрошенные',
                data
            }, {
                title: 'Желаемые',
                data
            }
        ]}
        contentContainerStyle={account.listsContainer}
        renderItem={RequestItem}
        keyExtractor={(item) => String(item.id)}
        renderSectionHeader={({ section: { title } = {} }) =>
            <View style={{ marginTop: 20 }}>
                <Title color="lightRed" >{title}</Title>
                <Seporator long />
            </View>}
    />
);

export const Requests = () => (
    <Page noScroll>
        <RequestsList data={data} />
    </Page>
);