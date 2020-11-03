import React, { useState, useContext } from 'react'
import { AuthContext } from '../Context/auth'

import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard, Platform, Alert } from 'react-native'
import styles from './styles'

import Logo from '../images/SignImage.png'
import LoginIcon from '../images/loginIcon.png'
import PasswordIcon from '../images/passwordIcon.png'
import checkIcon from '../images/check.png'
import emailIcon from '../images/Email.png'



function Cadastro() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const { signUp } = useContext(AuthContext)

    function handleCreateAccount() {
        Keyboard.dismiss()
        signUp(email, password, name)


    }



    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled style={styles.container}>

            <View style={styles.containerLeft}>
                <Image source={Logo}
                    resizeMode="contain"
                    style={styles.imageWidth}
                />

            </View>

            <View style={styles.containerRight}>

                <View style={styles.touchableContainerRight}>

                    <Image source={LoginIcon}
                        resizeMode="contain"
                        style={styles.ImageInput}
                    />

                    <TextInput
                        placeholder="Nome"
                        style={styles.input}
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={name}
                        onChangeText={text => setName(text)}
                    />


                </View>

                <View style={styles.touchableContainerRight}>

                    <Image source={emailIcon}
                        resizeMode="contain"
                        style={styles.ImageInput}
                    />

                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />


                </View>

                <View style={styles.touchableContainerRight}>

                    <Image source={PasswordIcon}
                        resizeMode="contain"
                        style={styles.ImageInput}
                    />

                    <TextInput
                        placeholder="Senha"
                        style={styles.input}
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </View>

                <TouchableOpacity style={styles.touchableContainerSend} onPress={handleCreateAccount}>


                    <Image source={checkIcon}
                        resizeMode="contain"
                        style={styles.sendImage}
                    />

                </TouchableOpacity>









            </View>
            <View style={styles.containerCopy}>
                <Text style={styles.textCopy}>Todos os direitos reservados © </Text>
            </View>








        </KeyboardAvoidingView>
    )
}

export default Cadastro;