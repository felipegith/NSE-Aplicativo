import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { NavigationContainer } from '@react-navigation/native'

import Header from '../components/Header'

import PageHome from '../Page/LandingPage/PageHome'


const AppStack = createStackNavigator()

function AppRoutes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ cardStyle: { backgroundColor: '#4DC2A2' } }}>

                <AppStack.Screen

                    name="PageHome"
                    component={PageHome}

                    options={{
                        headerShown: true,
                        header: () => <Header cancel={false} title="Seus afazeres" />
                    }}
                />

            </AppStack.Navigator>

        </NavigationContainer>
    )
}

export default AppRoutes;