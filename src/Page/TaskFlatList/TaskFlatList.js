import React from 'react'

import { Text, View, TouchableOpacity, TouchableWithoutFeedback, Share } from 'react-native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'


function TaskFlatList({ data, deleteTask, editTask }) {



    return (
        <View style={styles.container}>

            <View />

            <View style={styles.containerTask}>
                <TouchableWithoutFeedback onPress={() => editTask(data)}>
                    <Text style={styles.textTaskList}>{data.task}</Text>
                </TouchableWithoutFeedback>
            </View>

            <TouchableOpacity style={styles.containerTaskFlatList} onPress={() => deleteTask(data.key)}>
                <Feather name="trash" color="#a0f1db" size={15} />
            </TouchableOpacity>
        </View>
    )
}

export default TaskFlatList