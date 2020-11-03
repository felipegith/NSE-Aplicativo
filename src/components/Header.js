import React from 'react'
import { View, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import styles from './styles'





function Header({ title, cancel = true, showSobre }) {

    const navigation = useNavigation()

    function handleBackHome() {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#A0F1DB" />
            </BorderlessButton>
            <Text style={styles.headerText}>{title}</Text>

            {
                cancel ? (
                    <BorderlessButton onPress={handleBackHome}>
                        <Feather name="x" size={24} color="#A0F1DB" />

                    </BorderlessButton>
                ) : (
                        <View />
                    )
            }
        </View>
    )
}

export default Header;