//react components
import React, { useRef, useState, useEffect } from 'react';
import { Modal, TouchableOpacity, View, TextInput, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//third parties
import AsyncStorage from '@react-native-async-storage/async-storage';
//custom components
import MyButton from '../../components/MyButton/MyButton';
import MyText from '../../components/MyText/MyText';
//global
import { Colors, ScreensName, Service } from '../../global';
//styles
import { styles } from './ValidateOTPStyle';

const ValidateOTP = ({ visible, setVisibility, mobileNo, studentIdNo }) => {
  // ref
  const FirstOtpnumberRef = useRef();
  const SecondOtpnumberRef = useRef();
  const ThiredOtpnumberRef = useRef();
  const FourthOtpnumberRef = useRef();
  const FifthOtpnumberRedf = useRef();
  const SixthOtpnumberRef = useRef();

  // state
  const [firstOtp, setFirstOtp] = useState('');
  const [secondOtp, setSecondOtp] = useState('');
  const [thiredOtp, setThiredOtp] = useState('');
  const [fourthOtp, setFourthOtp] = useState('');
  const [fifthOtp, setFifthOtp] = useState('');
  const [sixthOtp, setSixthOtp] = useState('');

  // Function: Reset
  const resetState = () => {
    setFirstOtp("")
    setSecondOtp("")
    setThiredOtp("")
    setFourthOtp("")
    setFifthOtp("")
    setSixthOtp("")
  }

  //variables
  const navigation = useNavigation();

  const gotoBottomTab = () => navigation?.replace(ScreensName.BOTTOM_TABS);
  //function : imp function
  const gotoForgotPassword = () => {
    closeModal();
    navigation.navigate(ScreensName.SIGN_IN);
  };
  //function :modal function
  const closeModal = () => {
    setVisibility(false);
  };

  // Function: Service Function
  const validateOtp = async () => {
    const data = {
      mobile_no: mobileNo,
      student_id: studentIdNo,
      otp: `${firstOtp}${secondOtp}${thiredOtp}${fourthOtp}${fifthOtp}${sixthOtp}`
    }
    try {
      const response = await Service.postRequestWithOutToken(
        Service.OtpValidationUser,
        data
      )
      if (response?.response?.status == "SUCCESSS") {
        await AsyncStorage.setItem('userToken', response.response.session_id);
        gotoBottomTab()
      } else {
        Alert.alert(response?.response?.error_message)
      }
    } catch (error) {
      console.log('SignInUser Error', error)
    }
  }
  // UseEffect
  useEffect(() => {
    return () => {
      resetState()
    }
  }, [])
  //Ui
  return (
    <Modal
      visible={visible}
      onRequestClose={closeModal}
      animationType="fade"
      transparent={true}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.blurView} onPress={closeModal} />
        <View style={styles.mainView}>
          <MyText
            text="Verification Code"
            fontFamily="BOLD"
            fontSize={20}
            textAlign="center"
          />
          <MyText
            text="Please enter verification code recieved in your registered contact number."
            fontFamily="REGULAR"
            textAlign="center"
            style={{ marginBottom: 20 }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TextInput
              ref={FirstOtpnumberRef}
              style={styles.CodeTextInput}
              // value={firstOtp}
              placeholderTextColor="black"
              onChangeText={(val) => {
                if (val.length == 1) {
                  SecondOtpnumberRef.current.focus()
                } else {
                  FirstOtpnumberRef.current.focus()
                }
                setFirstOtp(val)
              }}
              onSubmitEditing={() => SecondOtpnumberRef.current.focus()}
              maxLength={1}
              keyboardType="number-pad"
            />
            <TextInput
              ref={SecondOtpnumberRef}
              value={secondOtp}
              onChangeText={(val) => {
                if (val.length == 1) {
                  ThiredOtpnumberRef.current.focus()
                } else {
                  FirstOtpnumberRef.current.focus()
                }
                setSecondOtp(val)
              }}
              onSubmitEditing={() => ThiredOtpnumberRef.current.focus()}
              style={styles.CodeTextInput}
              maxLength={1}
              keyboardType="number-pad"
            />
            <TextInput
              ref={ThiredOtpnumberRef}
              value={thiredOtp}
              onChangeText={(val) => {
                if (val.length == 1) {
                  FourthOtpnumberRef.current.focus()
                } else {
                  SecondOtpnumberRef.current.focus()
                }
                setThiredOtp(val)
              }}
              onSubmitEditing={() => FourthOtpnumberRef.current.focus()}
              style={styles.CodeTextInput}
              maxLength={1}
              keyboardType="number-pad"
            />
            <TextInput
              ref={FourthOtpnumberRef}
              value={fourthOtp}
              onChangeText={(val) => {
                if (val.length == 1) {
                  FifthOtpnumberRedf.current.focus()
                } else {
                  ThiredOtpnumberRef.current.focus()
                }
                setFourthOtp(val)
              }}
              onSubmitEditing={() => FifthOtpnumberRedf.current.focus()}
              style={styles.CodeTextInput}
              maxLength={1}
              keyboardType="number-pad"
            />
            <TextInput
              ref={FifthOtpnumberRedf}
              value={fifthOtp}
              onChangeText={(val) => {
                if (val.length == 1) {
                  SixthOtpnumberRef.current.focus()
                } else {
                  FourthOtpnumberRef.current.focus()
                }
                setFifthOtp(val)
              }}
              onSubmitEditing={() => SixthOtpnumberRef.current.focus()}
              style={styles.CodeTextInput}
              maxLength={1}
              keyboardType="number-pad"
            />
            <TextInput
              ref={SixthOtpnumberRef}
              value={sixthOtp}
              onChangeText={(val) => {
                if (val.length == 1) {
                  Keyboard.dismiss()
                } else {
                  FifthOtpnumberRedf.current.focus()
                }
                setSixthOtp(val)
              }}
              onSubmitEditing={() => Keyboard.dismiss()}
              style={styles.CodeTextInput}
              maxLength={1}
              keyboardType="number-pad"
            />
          </View>
          <View style={{ height: '5%' }} />
          <MyButton
            Title="Verify otp"
            backgroundColor={Colors.THEME_COLOR}
            width="70%"
            style={{ marginVertical: 20 }}
            onPress={() => validateOtp()}
          />
          <TouchableOpacity style={{ marginVertical: 5 }}>
            <MyText
              text="Resend Otp"
              textAlign="center"
              textColor='theme_color'
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ValidateOTP;
