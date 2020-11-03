import React, { createContext, useState, useEffect } from 'react'
import { Alert, Modal, View, TouchableHighlight, Button } from 'react-native'
import firebase from '../services/firebaseConnection'
import AsyncStorage from '@react-native-community/async-storage'

export const AuthContext = createContext({})

function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);

    // UseEffect verifica se tem algo dentro do nosso ASYNC_STORAGE, no caso, se tem algum usuário salvo. Se tiver, ele irá mandar para tela home que precisa da autenticação

    useEffect(() => {

        async function loadStorage() {

            const SaveStorageUser = await AsyncStorage.getItem('User_Authenticate')

            // Se tiver algo no nosso STORAGE...
            if (SaveStorageUser) {

                setUser(JSON.parse(SaveStorageUser))
                setLoading(false)
            }

            setLoading(false)
        }

        loadStorage()
    }, [])

    //Logando um usuário

    async function signIn(email, password) {

        await firebase.auth().signInWithEmailAndPassword(email, password)

            .then(async (value) => {

                let uid = value.user.uid

                await firebase.database().ref('users').child(uid).once('value')

                    .then((snapshot) => {

                        let data = {
                            uid: uid,
                            nome: snapshot.val().nome,
                            email: value.user.email
                        }
                        setUser(data)
                        setLoading(false)
                        SaveStorageUser(data)

                    })
            })
            .catch((error) => {



                if (email == '') {
                    Alert.alert('Informe seu email', 'Parece que você não nos informou seu email')



                }
                if (password == '') {
                    Alert.alert('Informe sua senha', 'Parece que você não nos informou sua senha')
                }




            })
    }

    // Criando cadastro do usuário

    async function signUp(email, password, nome) {

        await firebase.auth().createUserWithEmailAndPassword(email, password)

            .then(async (value) => {

                // Quando o usário criar a conta, a variável terá acesso ao seu UID que é unico para cada usuário.

                let uid = value.user.uid

                // Criando nossa database, com o nome do nó 'users'. esse nó terá um uid unico de casa usuário.
                await firebase.database().ref('users').child(uid).set({
                    nome: nome
                })
                    // Caso ele consiga criar corretamente, nós iremos pegar o seu uid, nome e email.
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email
                        }

                        // Colocamos todas as informações pegas no then dentro do nosso state.
                        Alert.alert(
                            'Conta criada com sucesso!', 'Fique a vontade para usar o aplicativo',
                            [
                                { text: 'OK', onPress: () => { } }
                            ]
                        )
                        setUser(data)
                        setLoading(false)
                        SaveStorageUser(data)
                    })
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('Esse email já está cadastrado na nossa base.', 'Esse email que você nos informou já está sendo utilizado por outro usuário')
                }
                if (error.code === 'auth/invalid-email') {
                    Alert.alert('Tipo de email inválido', 'O email que você informou não existe ou não segue o padrão de um email válido')
                }
                if (password.length < 6) {
                    Alert.alert('Senha inválida', 'Sua senha precisa no mínimo de 6 caracteres')
                }
                if (email == '') {
                    Alert.alert('Informe seu email', 'Parece que você não nos informou seu email')
                }
                if (password == '') {
                    Alert.alert('Informe sua senha', 'Parece que você não nos informou sua senha')
                }

                if (name == '') {
                    Alert.alert('Informe seu nome', 'Parece que você não nos informou seu nome.')
                }


            })
    }

    //Deslogando um usuário 

    async function SignOut() {
        await firebase.auth().signOut()

        await AsyncStorage.clear()

            .then(() => {
                setUser(null)
            })
    }

    // Salvando o usuário logado no banco do celular 

    async function SaveStorageUser(data) {

        await AsyncStorage.setItem('User_Authenticate', JSON.stringify(data))

    }


    return (

        // Signed !! user. Convertendo o state para boleano
        <AuthContext.Provider value={{ signed: !!user, signUp, signIn, SignOut, loading, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;