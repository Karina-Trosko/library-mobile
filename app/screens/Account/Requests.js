import React from 'react';
import { View, SectionList } from "react-native";
import { Page, SubTitle, Title, Seporator } from "../../common";
import { account } from '../../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { register } from '../../config/store';
import { getRequests } from '../../selectors/user';

const RequestItem = ({ item: { title, author, formatedDate } = {}, onPress }) => (
    <TouchableOpacity style={account.request} onPress={onPress}>
        <Title>{title}</Title>
        <SubTitle>{author}</SubTitle>
        {formatedDate ? <SubTitle>{formatedDate}</SubTitle> : null}
    </TouchableOpacity>
);

const RequestsList = ({ data = [], navigation }) => (
    <SectionList
        sections={[
            {
                title: 'On hand',
                data: data.filter(e => e.accept),
            },
            {
                title: 'Requested',
                data: data.filter(e => !e.accept && e.send),
            },
            {
                title: 'Favorite',
                data: data.filter(e => !e.send),
            }
        ]}
        contentContainerStyle={account.listsContainer}
        renderItem={({ item }) => <RequestItem
            item={item}
            onPress={() => navigation.navigate('BookDetails', {
                item: item.book,
                accept: item.accept,
                send: item.send && !item.accept,
                choosen: true,
            })} />}
        keyExtractor={(item) => String(item.id)}
        renderSectionHeader={({ section: { title } = {} }) =>
            <View style={{ marginTop: 20 }}>
                <Title color="lightRed" >{title}</Title>
                <Seporator long />
            </View>}
    />
);

export const Requests = register(({ requests, navigation }) => (
    <Page noScroll>
        <RequestsList data={requests} navigation={navigation} />
    </Page>
), {
    requests: getRequests
});