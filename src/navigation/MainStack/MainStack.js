// react components
import React from 'react'

import { View, Text } from 'react-native'

// stack navigator
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens
// import Home from '../../screens/Home/Home'
import Splash from '../../screens/Splash/Splash'
import SignIn from '../../screens/SignIn/SignIn'
import SignUp from '../../screens/SignUp/SignUp'


// global
import { ScreensName } from '../../global'

import BottomTabs from '../BottomTabs/BottomTabs'



const MainStack = () => {

    const Stack = createNativeStackNavigator()

    const initialRouteName=ScreensName.SPLASH;

    const screenOptions={
        headerShown:false
    }

    // stacks
    return (
        <Stack.Navigator screenOptions={screenOptions} initialRouteName={initialRouteName}>
            <Stack.Screen name={ScreensName.SPLASH} component={Splash} />
            <Stack.Screen name={ScreensName.SIGN_IN} component={SignIn} />
            <Stack.Screen name={ScreensName.SIGN_UP} component={SignUp}/>
            <Stack.Screen name={ScreensName.BOTTOM_TABS} component={BottomTabs}/>
        </Stack.Navigator>
    )
}

export default MainStack