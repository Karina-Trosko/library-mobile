import React from 'react';
import { View } from 'react-native';
import { AppHeader } from '../combo';
import { Page, Button } from '../common';

export const Home = () => (
    <View>
        <Page>
            <AppHeader/>
            <View style={{ flexDirection: 'row' }}>
                <Button title="Books"/>
                <Button title="Authors"/>
            </View>
        </Page>
    </View>
);