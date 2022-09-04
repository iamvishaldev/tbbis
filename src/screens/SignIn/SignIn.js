// react componets
import React, { useState } from 'react'
import { View, KeyboardAvoidingView, Platform, TouchableOpacity, Image, Alert } from 'react-native'
// components
import MyText from '../../components/MyText/MyText'
import MyTextInput from '../../components/MyTextInput/MyTextInput'
import MyButton from '../../components/MyButton/MyButton'
// modal
import OTPSent from '../../modal/OTPSent/OTPSent'
import ValidateOTP from '../../modal/ValidateOTP/ValidateOTP'
// package
import LinearGradient from 'react-native-linear-gradient'
// global
import { Colors, MyIcons, ScreensName, Service } from '../../global'
// styles
import { styles } from './SignInStyle'

const SignIn = ({ navigation }) => {
    const [mobileNumber, setMobileNumber] = useState()
    const [studentId, setStudentId] = useState()
    const [tcChecked, setTcChecked] = useState(false)
    const [showOTP, setShowOTP] = useState(false);
    const [showValidateOTP, setShowValidateOTP] = useState(false);
    // size
    const size = 24
    //function : navigation function
    const gotoSignUp = () => navigation?.navigate(ScreensName.SIGN_UP);
    //function : imp function
    const Validation = () => {
        if (mobileNumber == '') {
            Alert.alert('Error', 'Please enter Username');
        } else if (studentId == '') {
            Alert.alert('Error', 'Please enter password');
        } else if (tcChecked !== true) {
            Alert.alert('Error', 'Please accept Terms and Conditions');
        } else {
            return true;
        }
    };
    // Function: Service Function
    const signInUser = async () => {
        if (Validation()) {
            const data = {
                mobile_no: mobileNumber,
                student_id: studentId
            }
            try {
                const response = await Service.postRequestWithOutToken(
                    Service.SignInUser,
                    data
                )
                console.log("response.response", response.response);
                if (response.response.status == "SUCCESSS") {
                    setShowValidateOTP(true)
                } else {
                    Alert.alert("Error", response)
                    Alert.alert("Error --->", response?.response?.error_message)
                }
            } catch (error) {
                console.log('SignInUser Error', error)
            }
        }
    }
    return (
        <LinearGradient colors={[Colors.THEME_COLOR, Colors.WHITE]} style={styles.linearGradient}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "padding"} style={styles.container}>
                <MyText
                    text={"Sign In"}
                    fontFamily={"EXTRA_BOLD"}
                    fontSize={size}
                    textAlign="center"
                    style={styles.titleStyle}
                />
                <View style={styles.mainView}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/image/appLogo.jpg')}
                            style={styles.appLogoStyle}
                        />
                    </View>
                    <View>
                        <MyTextInput
                            Title="Mobile Number"
                            isBorder={false}
                            placeholder="Enter mobileNumber"
                            keyboardType="number-pad"
                            value={mobileNumber}
                            setValue={setMobileNumber}
                            InputIcons={<MyIcons.FetherIcon name="user" size={22} color={Colors.BLACK} />}
                        />
                        <MyTextInput
                            Title="UserId"
                            isBorder={false}
                            placeholder="Enter Password"
                            keyboardType="default"
                            value={studentId}
                            setValue={setStudentId}
                            InputIcons={<MyIcons.FetherIcon name="user" size={22} color={Colors.BLACK} />}
                        />
                        <View style={styles.TermAndConditionsView}>
                            <TouchableOpacity
                                onPress={() => setTcChecked(!tcChecked)}
                            >
                                <MyIcons.FetherIcon name={tcChecked ? "check-square" : "square"} size={15} />
                            </TouchableOpacity>
                            <MyText
                                text="I read and agree to"
                                fontSize={10}
                                style={{ marginHorizontal: 5 }}
                            />
                            <MyText
                                text="Terms and Conditions"
                                fontSize={10}
                                fontFamily="SEMI_BOLD"
                            />
                        </View>
                    </View>
                    <View>
                        <MyButton
                            Title={"Sign In"}
                            onPress={() => signInUser()}
                        />
                        <MyText
                            text="Forgot Password?"
                            textAlign="center"
                            fontFamily="SEMI_BOLD"
                            fontSize={10}
                            onPress={() => setShowOTP(true)}
                            style={{ marginVertical: 10 }}
                        />
                        <MyText
                            text="Don't have an account? Sign up"
                            textAlign="center"
                            fontFamily="SEMI_BOLD"
                            fontSize={10}
                            onPress={() => gotoSignUp()}
                            style={{ marginVertical: 10 }}
                        />
                    </View>
                </View>
                {/* modal */}
                <OTPSent
                    visible={showOTP}
                    setVisibility={setShowOTP}
                    setShowValidateOTP={setShowValidateOTP}
                />
                <ValidateOTP
                    visible={showValidateOTP}
                    setVisibility={setShowValidateOTP}
                    mobileNo={mobileNumber}
                    studentIdNo={studentId}
                />
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}

export default SignIn
