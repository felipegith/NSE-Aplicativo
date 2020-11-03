import React, { useRef } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Modalize } from 'react-native-modalize';

import styles from './styles'
import DescriptionIcon from '../images/SaibaImage.png'
import LogoIcon from '../images/NSE.png'



function TextModal() {
    return (
        <View style={styles.container}>

            <View style={styles.containerModalizeImage}>
                <Image source={LogoIcon}
                    resizeMode="contain"
                    style={styles.ModalImage}
                />
                <Text style={styles.textModalizeUser}>Como usar?</Text>
                <Text style={styles.textModalize}>Para que um aplicativo seja utilizável e agradável para o usuário, devemos possuir uma identidade gráfica intuitiva e didática, que faça com que o usuário não se sinta perdido e com dificuldade de encontrar as opções que ele deseja. O ‘NSE’ foi desenvolvido visando seguir todas as regras de Experiência do usuário (UX). Para deixar sua utilização ainda mais fácil, iremos deixar aqui um pequeno tutorial onde explicamos como funciona o nosso aplicativo e o que cada função faz. Dessa forma você não terá nenhuma dificuldade de utilizar este aplicativo.</Text>

            </View>
            <View>
                <Text style={styles.textModalize}>No primeiro acesso ao aplicativo, é necessário cadastrar uma conta para que suas atividades sejam salvas da maneira correta.</Text>
                <Text style={styles.textModalize}>Após criar sua conta, entre com Email e Senha cadastrados </Text>
                <Text style={styles.textModalize}>No centro superior do aplicativo será mostrado o nome que você cadastrou e um ícone para sair da conta.</Text>
                <Text style={styles.textModalize}>Logo após o texto de apresentação do aplicativo, existe uma área aonde você pode cadastrar suas tarefas. Ao lado direito dessa área existe um ícone para você adicionar a tarefa que você escreveu. Antes da tarefa ser salva, iremos mostrar uma tela aonde perguntaremos se é realmente isso que você deseja cadastrar. Caso confirme, a tarefa será mostrada logo abaixo.</Text>
                <Text style={styles.textModalize}>Caso você cadastre uma tarefa e queira apagá-la, é simples, basta clicar no ícone da lixeira do lado direito da tarefa.</Text>
                <Text style={styles.textModalize}>Caso você precise editar sua tarefa, basta clicar no texto da tarefa que você deseja editar. Após clicar na tarefa, a mesma será mostrada na mesma área em que você cadastra uma tarefa. No momento em que você estiver editando, será mostrada uma mensagem dizendo que você está fazendo modificações na tarefa. </Text>
                <Text style={styles.textModalize}>Ainda sobre atualização da tarefa, caso você aperte no texto e desista de atualizar, basta clicar na opção ‘x’ que irá aparecer à direita do texto de edição de tarefas.</Text>
            </View>
        </View>
    )
}

export default TextModal;