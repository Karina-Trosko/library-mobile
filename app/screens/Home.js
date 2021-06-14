import React from 'react';
import { View } from 'react-native';
import { Page, Button } from '../common';
import { bookApi, userApi } from '../services/api';
import actions from '../actions';
import { useSelector } from 'react-redux';
import { getUserId } from '../selectors/user';

export const Home = ({ navigation }) => {
    // const jj = bookApi.getBooks();  
    const userId = useSelector(getUserId); 
    return (
    <View>
        <Page>
            <View>
                <Button title="BooksList"  onPress={() => { bookApi.getBooks((res) => actions.changecatalogContent(res)); navigation.navigate('BooksList'); }} />
                <Button title="Requests"  onPress={() => { userApi.getRequests(userId, (res) => actions.setRequests(res)); navigation.navigate('Requests'); }} />
            </View>
        </Page>
    </View>
)};