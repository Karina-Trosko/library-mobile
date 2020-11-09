import React from "react";
import { Text } from "react-native";
import { text } from '../styles';

export const Title = ({ children, style = {}, big = false }) => (
    <Text style={[big ? text.bigTitle : text.title, style]}>{children}</Text>
);

export const SubTitle = ({ children, big = false }) => (
    <Text style={big ? text.bigSubtitle : text.subtitle}>{children}</Text>
);