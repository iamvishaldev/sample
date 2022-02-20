import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

// navigation
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/navigation/MainStack/MainStack'
import { SafeAreaView } from 'react-native-safe-area-context'
//redux
import { store } from "./src/redux/store/store";
import { Provider } from "react-redux";
// global
import { Colors } from './src/global'


const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar backgroundColor={Colors.THEME_COLOR} />
          <MainStack />
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
