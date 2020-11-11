import React from "react";
import { FlatList, View } from "react-native";
import { listInfo } from "../styles";
import { Seporator } from "./Separator";
import { SubTitle } from "./Text";

const ListInfoItem = ({ item: { fieldKey, fieldValue } = {} }) => (
    <View style={listInfo.item}>
        <SubTitle style={{ flex: 1, marginRight: 5 }} color="lightBlue">{fieldKey}</SubTitle>
        <SubTitle style={{ flex: 1.5 }}>{fieldValue}</SubTitle>
    </View>
);

export const ListInfo = ({ info = {}, fields = [] }) => (
    <FlatList
        data={fields.map(e => ({ fieldKey: `${e.name}:`, fieldValue: info[e.id] }))}
        renderItem={ListInfoItem}
        keyExtractor={(item) => String(item.fieldKey)}
        ItemSeparatorComponent={() => <Seporator color="primaryLight" />}
    />
);