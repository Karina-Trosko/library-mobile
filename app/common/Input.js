import React from "react";
import { TextInput, View } from "react-native";
import { input } from "../styles";
import { SubTitle } from "./Text";

export const Input = ({ style }) => (
    <TextInput style={[input.container, style]} />
);

export const InputWithHint = ({ hint, style }) => (
    <View style={style}>
        <SubTitle color="lightRed" bold>{`${hint}: `}</SubTitle>
        <Input style={{ marginVertical: 10 }} />
    </View>
);
