import { StatusBar } from 'expo-status-bar';
import React from 'react';

console.disableYellowBox = true

import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import { Nunito_300Light, Nunito_700Bold, Nunito_600SemiBold, Nunito_400Regular } from '@expo-google-fonts/nunito'

import Login from './src/SignIn/Login'
import Cad from './src/SignUp/Cad'
import Nse from './src/Page/NSE/Nse'
import ModalDescription from './src/components/Description/Description'
import TextModal from './src/TextModal/TextModal'
import AddTask from './src/addTask/addTask'

import AuthProvider from './src/Context/auth'


import Rooutes from './src/routes/index'

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_300Light
  })

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <AuthProvider>
        <StatusBar style='light' backgroundColor="#000" />
        <Rooutes />
      </AuthProvider>

    </>
  );
}


