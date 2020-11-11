import EStyleSheet from "react-native-extended-stylesheet";

export const appHeader = EStyleSheet.create({
    container: {
        backgroundColor: '$primaryDark',
        height: 70,
    },
    title: {
        color: '$primaryLight',
        fontWeight: '300',
        fontSize: 28,
    },
});

export const buttons = EStyleSheet.create({
    usualButton: {
        backgroundColor: '$secondaryDark',
        paddingHorizontal: 10,
        paddingVertical: 8,
        margin: 10,
        borderRadius: 10,
        // flex: 1,
    },
    text:{
        color: '$primaryLight',
        textAlign: 'center',
    },
});

export const text = EStyleSheet.create({
    title: {
        color: '$primaryDark',
        fontSize: 24,
        fontWeight: '600'
    },
    subtitle: {
        color: '$primaryDark',
        fontSize: 18,
    },
    bigTitle: {
        color: '$primaryDark',
        fontWeight: '600',
        fontSize: 42,
    },
    bigSubtitle: {
        color: '$primaryDark',
        fontSize: 26,
    },
    notification: {
        padding: 20,
        backgroundColor: '$secondaryDarkLight',
        borderTopWidth: 2,
        borderTopColor: '$secondaryDark',
    },
    lightBlue: {
        color: '$secondaryLight',
    },
    lightRed: {
        color: '$secondaryDark',
    },
});

export const separator = EStyleSheet.create({
    listSeparator: {
        backgroundColor: '$secondaryDark',
        height: 2,
        marginVertical: 1,
        width: '92%',
        alignSelf: 'center',
    },
    primaryLight: {
        backgroundColor: '$primaryLight',
    },
});
