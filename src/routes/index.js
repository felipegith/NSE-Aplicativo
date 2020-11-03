import React, { useContext } from 'react'
import { AuthContext } from '../Context/auth'
import { View, ActivityIndicator } from 'react-native'


import AuthRoutes from './authRoutes'
import AppRoutes from './appRoutes'

function Rooutes() {

    const { signed, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator
                    size="large"
                    color="#A0F1DB"

                />
            </View>
        )
    }

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Rooutes;