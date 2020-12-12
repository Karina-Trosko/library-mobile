import React from 'react';
import { View } from "react-native";
import { separator } from '../styles';

export const Seporator = ({ color, long }) => (
    <View style={[long ? separator.longSeparator : separator.listSeparator, separator[color]]} />
); 