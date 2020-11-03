import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#4DC2A2'

    },
    imageWidth: {
        width: 196,
        height: 128
    },
    containerLeft: {
        width: '50%',
        alignItems: 'flex-start',
        justifyContent: 'center'

    },
    containerRight: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: "#A0F1DB",

    },
    touchableContainerRight: {
        padding: 10,
        width: 173,
        height: 45,
        backgroundColor: '#4DC2A2',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        top: 35,
    },
    ImageInput: {

        width: 14,
        height: 13
    },
    input: {
        width: '100%',
        fontFamily: 'Nunito_300Light',
        fontSize: 10,

    },

    touchableContainerSend: {
        top: 60,
        alignItems: 'center'

    },
    containerSignUp: {
        backgroundColor: '#000',
        top: 30
    },


    sendImage: {
        width: 36,
        height: 36
    },
    styleText: {
        fontWeight: 'bold',
        color: '#4DC2A2',

    },
    touchableTextCad: {

        top: 95
    },
    containerCopy: {
        position: 'absolute',
        bottom: 15
    },
    textCopy: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#285348',
        fontSize: 10
    }


})

export default styles;