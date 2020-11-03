import React, { useRef } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import DescriptionIcon from '../../images/SaibaImage.png'
import TextModal from '../../TextModal/TextModal'
import LogoIcon from '../../images/NSE.png'

function ModalDescription() {

    const modalizeRef = useRef(null)

    const navigation = useNavigation()

    function onOpen() {
        modalizeRef.current?.open()
    }

    function handleGoToHomeNSEAPP() {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerNSE}>
                <Image source={LogoIcon}
                    resizeMode="contain"
                    style={styles.imageLogoDescrip}
                />
                <Text style={styles.textNSE}>Nunca se esqueça é o aplicativo que te ajuda a lembrar de todas as tarefas que você precisa no dia a dia.</Text>
            </View>
            <TouchableOpacity onPress={onOpen} style={styles.ModalTouchable}>
                <Text style={styles.textDesc}>Como usar?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableGoToLoginNSE} onPress={handleGoToHomeNSEAPP}>
                <Text style={styles.textGoToLoginNSE}>Começe a usar o aplicativo agora mesmo!</Text>
            </TouchableOpacity>

            <View style={styles.containerAppFooter}>
                <Text style={styles.textAppFooter}>Todos os direitos reservados ©</Text>
            </View>


            <Modalize
                ref={modalizeRef}
                snapPoint={180}

            >
                <TextModal />

            </Modalize>
        </View>
    )

}



export default ModalDescription