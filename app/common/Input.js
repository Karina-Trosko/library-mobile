import React from "react";
import { TextInput, View } from "react-native";
import { input } from "../styles";
import { SubTitle } from "./Text";

export const Input = ({ style, onChange }) => (
    <TextInput style={[input.container, style]} onChangeText={onChange} />
);

export const InputWithHint = ({ hint, style, onChange }) => (
    <View style={style}>
        <SubTitle color="lightRed" bold>{`${hint}: `}</SubTitle>
        <Input style={{ marginVertical: 10 }} onChange={onChange}/>
    </View>
);
