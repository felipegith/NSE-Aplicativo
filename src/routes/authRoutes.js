import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import SignIn from '../SignIn/Login'
import SignUp from '../SignUp/Cad'
import Header from '../components/Header'
import Nse from '../Page/NSE/Nse'
import Tutorial from '../components/Tutorial/Tutorial'
import ModalDescriptionHome from '../components/Description/Description'

const StackAuth = createStackNavigator()

function authRoutes() {
    return (
        <NavigationContainer>
            <StackAuth.Navigator initialRouteName="NseAPP" screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#4DC2A2' } }}>

                <StackAuth.Screen

                    name="NseAPP"
                    component={ModalDescriptionHome}
                    options={{
                        headerShown: true,
                        header: () => <Tutorial title="Como usar" />
                    }}
                />
                <StackAuth.Screen
                    name="Login"
                    component={SignIn}

                />

                <StackAuth.Screen
                    name="Cadastro"
                    component={SignUp}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Criar conta" />
                    }}

                />

            </StackAuth.Navigator>
        </NavigationContainer>
    )
}

export default authRoutes;