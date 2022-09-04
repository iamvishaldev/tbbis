import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
// navigation container
import { NavigationContainer } from '@react-navigation/native';

// stack
import MainStack from './src/navigation/MainStack/MainStack'
import { Colors } from './src/global';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    // <Provider store={store} >
    <NavigationContainer ionContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={Colors.THEME_COLOR} />
        <MainStack />
      </SafeAreaView>
    </NavigationContainer>
    // </Provider>
  )
}

export default App
