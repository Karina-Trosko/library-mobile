import React from 'react';
import { View } from "react-native";
import { SubTitle, Title, Seporator } from "../common";
import { bunner } from '../styles';

export const Bunner = ({ title, subtitle }) => (
    <View>
        <View style={bunner.textBlock}>  
            <Title big>{title}</Title>
            <SubTitle big>{subtitle}</SubTitle>
        </View>
        <Seporator/>
    </View>
);