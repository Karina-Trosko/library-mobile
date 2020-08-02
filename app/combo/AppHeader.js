import React from 'react';
import { SafeAreaView } from 'react-navigation';
import EStyleSheet from "react-native-extended-stylesheet";
import { View, Text } from 'react-native';
import { appHeader } from '../styles';

export const AppHeader = () => {

    return (
    <SafeAreaView>
        <View style={appHeader.container}>
            <Text style={{ fontWeight: '600', fontSize: 40, color: EStyleSheet.value('$primaryLight') }}>Library</Text>
        </View>
    </SafeAreaView>
)};