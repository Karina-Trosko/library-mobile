import React from 'react';
import { View } from 'react-native';
import { Page, Button } from '../common';

export const Home = ({ navigation }) => (
    <View>
        <Page>
            <View style={{ flexDirection: 'row' }}>
                <Button title="Books" onPress={() => navigation.navigate('BooksList')}/>
                <Button title="Authors"/>
            </View>
        </Page>
    </View>
);