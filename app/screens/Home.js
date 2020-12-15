import React from 'react';
import { View } from 'react-native';
import { Page, Button } from '../common';

export const Home = ({ navigation }) => {
    return (
    <View>
        <Page>
            <View>
                <Button title="BooksList"  onPress={() => navigation.navigate('BooksList')} />
                <Button title="Requests"  onPress={() => navigation.navigate('Requests')} />
            </View>
        </Page>
    </View>
)};