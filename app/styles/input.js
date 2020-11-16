import EStyleSheet from "react-native-extended-stylesheet";

export const input = EStyleSheet.create({
    inputText: {
        color: '$secondaryDark',
        fontSize: 18,
        fontWeight: 'bold',
    },
    container: {
        borderWidth: 2,
        borderColor: '$primaryLight',
        borderRadius: 3,
        backgroundColor: '$absWhite',
        padding: 10,
        color: '$primaryDark',
        fontSize: 18,
    },
});