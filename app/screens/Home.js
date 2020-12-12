import React from 'react';
import { View } from 'react-native';
import { Page, Button } from '../common';

export const Home = ({ navigation }) => {
    return (
    <View>
        <Page>
            <View>
                {/* style={{ flexDirection: 'row' }}*/} 
                <Button title="SignIn" onPress={() => navigation.navigate('SignIn')} />
                <Button title="SignUp"  onPress={() => navigation.navigate('SignUp')} />
                <Button title="BookDetails"  onPress={() => navigation.navigate('BookDetails')} />
                <Button title="BooksList"  onPress={() => navigation.navigate('BooksList')} />
                <Button title="Requests"  onPress={() => navigation.navigate('Requests')} />
            </View>
        </Page>
    </View>
)};