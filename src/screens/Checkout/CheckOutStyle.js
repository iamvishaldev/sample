import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../global'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: Colors.WHITE,
        padding: 10
    },
    myCard: {
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius: 10,
        elevation: 3,
    },
    CheckOutText: {
        marginVertical: 10,
    },
    buttonStyle: {
        backgroundColor: Colors.THEME_COLOR,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonTextStyle: {
        fontSize: 16,
        textAlign: "center",
        fontFamily: 'Bold',
        color: Colors.WHITE,
    },
    checkOutItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 2,
        marginVertical: 10,
        padding: 10,
        borderColor: Colors.THEME_COLOR,
        borderRadius: 5,
        width: '100%',
    },
    paymentItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: Colors.THEME_COLOR,
        marginVertical: 10,
        padding: 5,
        borderRadius: 5,
        elevation: 2,
        backgroundColor: Colors.WHITE,
        margin: 2,
    }
})