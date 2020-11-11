import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const windowsHeight = Dimensions.get('window').height - 90;

export const list = EStyleSheet.create({
    listItem: {
        marginHorizontal: 15,
        paddingHorizontal: 5,
        paddingVertical: 8,
    },
    listContainer: {
        height: '100%',
        backgroundColor: '$white',
    },
});

export const listInfo = EStyleSheet.create({
    item: {
        marginHorizontal: 15,
        paddingVertical: 15,
        paddingHorizontal: 5,
        flexDirection: 'row'
    },
});