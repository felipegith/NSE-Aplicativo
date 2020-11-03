import React, { useState, useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../../Context/auth'
import firebase from '../../services/firebaseConnection'
import { AntDesign } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { format } from 'date-fns'
import { Feather } from '@expo/vector-icons'

import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList, Keyboard, Alert, KeyboardAvoidingView } from 'react-native'



import Logo from '../../images/Logo.png'

import addIcon from '../../images/addIcon.png'

import TaskFlatList from '../TaskFlatList/TaskFlatList'
import styles from './styles'





function PageHome() {

    const inputRef = useRef(null)
    const [task, setTask] = useState('')
    const [flatListState, setFlatListState] = useState([])
    const [afterClick, setAfterClick] = useState('')

    const { user, user: usuario, SignOut } = useContext(AuthContext)

    const uid = user && user.uid

    // Quando meu aplicativo atualizar!
    useEffect(() => {

        async function LoadApp() {

            await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
                setTask(snapshot.val().task)
            })

            await firebase.database().ref('tarefas')
                .child(uid).orderByChild('date')
                .equalTo(format(new Date, 'dd/MM/yy'))
                .limitToLast(30).on('value', (snapshot) => {
                    setFlatListState([])

                    snapshot.forEach((childItem) => {

                        let list = {
                            key: childItem.key,
                            task: childItem.val().task
                        }

                        setFlatListState(oldArray => [...oldArray, list].reverse())
                    })
                })
        }

        LoadApp()
    }, [])


    async function handAddTask() {
        Keyboard.dismiss()
        if (task === null) {
            alert('Preencha o campo corretamente!')
            return
        }
        if (afterClick !== '') {

            await firebase.database().ref('tarefas').child(uid).child(afterClick).update({
                task: task
            })
            Keyboard.dismiss()
            setTask('')
            setAfterClick('')
            return;
        }

        Alert.alert(
            'Essa foi a tarefa que você cadastrou?',
            `TAREFA: ${task}`,

            [
                {
                    text: 'Não',
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => addAlert()
                }
            ]
        )
    }

    async function addAlert() {

        let uid = usuario.uid

        let key = await firebase.database().ref('tarefas').child(uid).push().key

        await firebase.database().ref('tarefas').child(uid).child(key).set({

            task: task,
            date: format(new Date(), 'dd/MM/yy')
        })
        setTask('')
        Keyboard.dismiss()
    }

    async function handleDelete(key) {
        await firebase.database().ref('tarefas').child(uid).child(key).remove()
    }

    async function handleEdit(data) {

        setTask(data.task)
        setAfterClick(data.key)
        inputRef.current.focus()
    }

    function editClose() {
        setAfterClick('')
        Keyboard.dismiss()
        setTask('')
    }




    return (
        <View style={styles.container}>
            <View style={styles.containerSignIn}>
                <Text style={styles.textSignIn}>Olá, {user && user.nome}</Text>
                <TouchableOpacity onPress={() => SignOut()}>
                    <AntDesign name="logout" size={15} color="red" />
                </TouchableOpacity>

            </View>
            <View style={styles.containerImageHomePage}>

                <Image source={Logo}
                    resizeMode="contain"
                    style={styles.imageHomePage}
                />


            </View>
            <Text style={styles.textModalNSE}>Esse é o aplicativo que nunca te deixará na mão! Aqui você grava todas as suas tarefas, compromissos, afazeres e tudo mais. Nós não deixaremos você esquercer de nada.</Text>

            {
                afterClick.length > 0 && (
                    <View style={styles.containerEdit}>

                        <Text style={styles.textEditTask}>Sua mensagem está sendo editada.</Text>

                        <TouchableOpacity onPress={editClose}>
                            <Feather name="x-circle" size={20} color="#a0f1db" />
                        </TouchableOpacity>

                    </View>
                )
            }
            <View style={styles.containerTasks}>

                <TextInput
                    placeholder="Suas atividades"
                    style={styles.inputTasks}
                    value={task}
                    onChangeText={text => setTask(text)}
                    ref={inputRef}
                />

                <RectButton style={styles.touchableAddTask} onPress={handAddTask}>
                    <Image source={addIcon}
                        resizeMode="contain"
                        style={styles.imageAddTask}
                    />
                </RectButton>


            </View >

            <ScrollView style={styles.containerFlat} contentContainerStyle={{ alignItems: 'center' }} >
                <FlatList
                    data={flatListState}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => (
                        <TaskFlatList data={item} deleteTask={handleDelete} editTask={handleEdit} />
                    )}
                />
            </ScrollView >

        </View>
    )
}

export default PageHome;