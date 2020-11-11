import React from "react";
import { Text, View } from "react-native";
import { text } from '../styles';

export const Title = ({ children, style = {}, big = false }) => (
    <Text style={[big ? text.bigTitle : text.title, style]}>{children}</Text>
);

export const SubTitle = ({ children, big = false, style, color }) => (
    <Text style={[big ? text.bigSubtitle : text.subtitle, text[color], style]}>{children}</Text>
);

export const BottomNotification = ({ notification }) => (
    <View style={text.notification}>
        <SubTitle color="lightRed">{notification}</SubTitle>
    </View>
);