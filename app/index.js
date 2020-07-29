import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class App extends Component {
    componentDidMount() {
        // SplashScreen.hide();
    }

    render() {
        return (
                <View>
                    <Text>Hello world</Text>
                </View>
        );
    }
}