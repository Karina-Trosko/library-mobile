import React from 'react';
import { View } from "react-native";
import { separator } from '../styles';

export const Seporator = ({ color }) => (
    <View style={[separator.listSeparator, separator[color]]} />
); 