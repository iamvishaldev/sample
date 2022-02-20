import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// stack navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens name
import { ScreensName } from '../../global'

// Screens
import SignUp from '../../screens/SignUp/SignUp'
import Order from '../../screens/Order/Order'
import Checkout from '../../screens/Checkout/CheckOut'


const MainStack = () => {
    Stack = createNativeStackNavigator()
    const initialRouteName = ScreensName.SIGN_UP
    const screenOptions = {
        headerShown: false
    }
    return (
        <Stack.Navigator screenOptions={screenOptions} initialRouteName={initialRouteName}>
            <Stack.Screen name={ScreensName.SIGN_UP} component={SignUp} />
            <Stack.Screen name={ScreensName.ORDER} component={Order} />
            <Stack.Screen name={ScreensName.CHECKOUT} component={Checkout} />
        </Stack.Navigator>
    )
}

export default MainStack

const styles = StyleSheet.create({})
