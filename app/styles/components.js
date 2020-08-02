import EStyleSheet from "react-native-extended-stylesheet";

export const appHeader = EStyleSheet.create({
    container: {
        backgroundColor: '$primaryDark',
        height: 70,
    },
});

export const buttons = EStyleSheet.create({
    usualButton: {
        backgroundColor: '$secondaryDark',
        paddingHorizontal: 10,
        paddingVertical: 8,
        margin: 10,
        borderRadius: 10,
        flex: 1,
    },
    text:{
        color: '$primaryLight',
    },
});

export const text = EStyleSheet.create({
    title: {
        color: '$primaryDark',
        fontSize: 30,
        fontWeight: '600'
    },
    subtitle: {
        color: '$primaryDark',
        fontSize: 22,
    },
});