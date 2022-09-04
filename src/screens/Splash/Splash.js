import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import { View, Image } from 'react-native'
import { ScreensName } from '../../global'
// style
import { styles } from './SplashStyle'

const Splash = ({ navigation }) => {
    //function : navigation function
    const gotoBottomTab = () => navigation?.replace(ScreensName.BOTTOM_TABS);
    const checkSessionId = async () => {
        const sessionId = await AsyncStorage.getItem("userToken")
        if (sessionId == null) {
            navigation.replace(ScreensName.SIGN_IN)
        } else {
            gotoBottomTab()
        }
    }
    //useEffect
    useEffect(() => {
        setTimeout(() => {
            checkSessionId()
        }, 2000);
        return () => {
        }
    }, [])
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/image/appLogo.jpg')}
                style={styles.appLogoStyle}
            />
        </View>
    )
}

export default Splash
