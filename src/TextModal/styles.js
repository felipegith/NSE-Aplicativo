import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4DC2A2',

    },

    containerModalizeImage: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    ModalImage: {
        width: 240,
    },
    textModalize: {
        fontSize: 15,
        textAlign: 'center',
        color: '#A0F1DB',
        fontFamily: 'Nunito_600SemiBold',
        marginTop: 25

    },
    textModalizeUser: {
        width: '100%',
        textAlign: 'center',
        color: '#A0F1DB',
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: '#25DFB3'

    }
})

export default styles;