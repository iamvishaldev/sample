import { StyleSheet } from 'react-native';
import { Colors } from '../../global';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    HeaderStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginVertical: 10,
    },
    myTextStyle: {
        color: '#ffffff',
    },
    textStyle: {
        color: Colors.BLACK
    },
    flexrowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    boxStyle: {
        backgroundColor: '#ffffff',
        padding: 15,
        marginTop: 40,
        borderRadius: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
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
    }
});
