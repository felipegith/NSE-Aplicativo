import React from 'react'

import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles'

function Tutorial({ title }) {

    function ModalPress() {

    }


    return (

        <View style={styles.container}>

            <BorderlessButton onPress={ModalPress}>
                <AntDesign name="infocirlceo" size={24} color="#A0F1DB" />
            </BorderlessButton>
            <Text style={styles.headerText}>{title}</Text>
            <View />
        </View>
    )
}

export default Tutorial