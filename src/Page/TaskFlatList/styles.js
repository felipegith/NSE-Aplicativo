import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {

        flexDirection: 'row',
        backgroundColor: '#4DC2A2',
        marginTop: 15,
        width: 330,
        height: 107,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly'

    },
    containerTaskFlatList: {


    },

    containerTask: {
        width: '80%',
        alignItems: 'center',

        paddingLeft: 15
    },

    textTaskList: {
        fontFamily: 'Nunito_700Bold',
        color: '#a0f1db',
    }
})

export default styles;