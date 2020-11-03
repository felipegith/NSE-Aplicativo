import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',

    },
    textApp: {
        fontFamily: 'Nunito_300Light',
        color: '#a0f1db',
        marginTop: 5

    },
    containerAppFooter: {
        position: 'absolute',
        bottom: 0
    },

    textAppFooter: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#285348',
        fontSize: 10
    },
    containerDescription: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles;