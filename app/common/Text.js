import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { text } from '../styles';

export const Title = ({ children, style = {}, big = false, color }) => (
    <Text style={[big ? text.bigTitle : text.title, text[color], style]}>{children}</Text>
);

export const SubTitle = ({ children, big = false, style, color, bold }) => (
    <Text style={[
        big ? text.bigSubtitle : text.subtitle,
        text[color],
        bold && { fontWeight: 'bold' },
        style
    ]}>{children}</Text>
);

export const BottomNotification = ({ notification }) => (
    <View style={text.notification}>
        <SubTitle color="lightRed">{notification}</SubTitle>
    </View>
);

export const Link = ({ title, style, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={[text.link, style]}>{title}</Text>
    </TouchableOpacity>
);