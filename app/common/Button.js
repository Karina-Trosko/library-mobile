import React from "react";
import { TouchableOpacity} from "react-native";
import { buttons } from '../styles';
import { Title } from "./Text";

export const Button = ({ title, onPress, style={} }) => (
    <TouchableOpacity style={[buttons.usualButton, style]} onPress={onPress}>
        <Title style={buttons.text}>{title}</Title>
    </TouchableOpacity>
);
