import { StyleSheet } from 'react-native'
import { back } from 'react-native/Libraries/Animated/src/Easing';

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4DC2A2'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 7
    },
    containerModalize: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4DC2A2'
    },

    containerModalizeImage: {
        alignItems: 'center'

    },

    ModalImage: {
        width: 90,



    },
    textModalize: {
        color: '#A0F1DB',
        fontFamily: 'Nunito_300Light'
    },
    textDesc: {
        color: '#A0F1DB',
        fontFamily: 'Nunito_700Bold',
        fontSize: 18
    },
    ModalTouchable: {

        marginTop: 50
    },
    containerNSE: {

        alignItems: 'center'
    },
    textNSE: {
        textAlign: 'center',
        fontFamily: 'Nunito_700Bold',
        color: '#a0f1db'
    },
    touchableGoToLoginNSE: {
        marginTop: 40,
        backgroundColor: '#A0f1db',
        padding: 20,
        borderRadius: 20
    },
    textGoToLoginNSE: {
        color: '#4dc2a2',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 12
    },
    textAppFooter: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#285348',
        fontSize: 10
    },
    containerAppFooter: {
        position: 'absolute',
        bottom: 0
    },
})

export default styles;