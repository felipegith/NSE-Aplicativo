import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',

    },
    containerSignIn: {
        marginTop: 10,

        backgroundColor: '#A0F1DB',
        borderRadius: 10,
        width: 183,
        height: 33,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },


    textModalNSE: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#a0f1db',
        textAlign: 'center',
        marginTop: 13
    },

    textSignIn: {
        color: '#4DC2A2',
        fontFamily: 'Nunito_700Bold',
        fontSize: 15,
        padding: 10,
    },
    imageHomePage: {
        width: 205,
        borderBottomWidth: 1
    },
    containerImageHomePage: {
        width: '100%',
        height: 80,
        marginTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#25DFB3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTasks: {


        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 25,
        width: 284,

        borderRadius: 15,
        backgroundColor: '#a0f1db'
    },
    inputTasks: {
        textAlign: 'center',
        width: '100%',
        fontFamily: 'Nunito_300Light'
    },

    containerFlat: {
        width: '100%',
        flex: 1,
        marginTop: 35,
        backgroundColor: '#a0f1db',
        borderTopRightRadius: 65,
        borderTopLeftRadius: 65,

    },
    touchableAddTask: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginLeft: 5
    },
    imageAddTask: {
        width: 28,
        height: 18
    },
    containerEdit: {
        top: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    textEditTask: {
        fontFamily: 'Nunito_600SemiBold',
        color: '#a0f1db',
        marginRight: 5
    }

})


export default styles;