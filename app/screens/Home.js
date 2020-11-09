import React from 'react';
import { View } from 'react-native';
import { Page, Button } from '../common';

export const Home = ({ navigation }) => {
    return (
    <View>
        <Page>
            <View style={{ flexDirection: 'row' }}>
                {/*temporary replace BooksList by BookDetails */} 
                <Button title="Books" onPress={() => navigation.navigate('BookDetails')}/>
                <Button title="Authors"/>
            </View>
        </Page>
    </View>
)};