// marginHorizontal: 15,
import EStyleSheet from "react-native-extended-stylesheet";

export const account = EStyleSheet.create({
    contentContainer: {
        marginHorizontal: '$mainMargin',
        marginTop: 40,
    },
    listsContainer: {
        marginHorizontal: '$mainMargin',
        paddingBottom: 20
    },
    request: {
        borderWidth: 2,
        borderColor: '$primaryLight',
        borderRadius: 3,
        backgroundColor: '$absWhite',
        padding: 10,
        marginTop: '$mainMargin',
    }
});