import React, { useEffect, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Modalize } from 'react-native-modalize';

import { View, Image, ActivityIndicator, Text } from 'react-native'

import styles from './styles'
import LogoApp from '../../images/Logo.png'
import Description from '../../components/Description/Description'

function Nse() {






    return (
        <View style={styles.container}>
            <Description />
        </View>




    )
}

export default Nse