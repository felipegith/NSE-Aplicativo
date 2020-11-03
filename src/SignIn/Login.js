import React, { useState, useContext } from 'react'
import firebase from '../services/firebaseConnection'
import { View, Keyboard, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator, Platform, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import { AuthContext } from '../Context/auth'


import Logo from '../images/SignImage.png'
import LoginIcon from '../images/loginIcon.png'
import PasswordIcon from '../images/passwordIcon.png'
import sendIcon from '../images/send.png'
import emailIcon from '../images/Email.png'
import Description from '../components/Description/Description'





function Login() {

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const { signIn } = useContext(AuthContext)


    function handleLogin() {
        Keyboard.dismiss()
        signIn(email, password)


    }



    function handleNavigateToSignUp() {

        navigation.navigate('Cadastro')
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
                        secureTextEntry={true}
                        style={styles.input}
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </View>

                <TouchableOpacity style={styles.touchableContainerSend} onPress={handleLogin}>


                    <Image source={sendIcon}
                        resizeMode="contain"
                        style={styles.sendImage}
                    />

                </TouchableOpacity>

                <TouchableOpacity style={styles.touchableTextCad} onPress={handleNavigateToSignUp}>
                    <Text style={styles.styleText}>Cadastre-se</Text>


                </TouchableOpacity>






            </View>


            <View style={styles.containerCopy}>

                <Text style={styles.textCopy}>Todos os direitos reservados © </Text>
            </View>





        </KeyboardAvoidingView>
    )
}

export default Login;