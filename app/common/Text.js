import React from "react";
import { Text } from "react-native";
import { text } from '../styles';

export const Title = ({ children, style={} }) => (
    <Text style={[text.title, style]}>{children}</Text>
);

export const SubTitle = ({children}) => (
    <Text style={text.subtitle}>{children}</Text>
);