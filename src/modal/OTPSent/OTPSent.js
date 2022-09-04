//react components
import React, { Fragment, useEffect, useState } from 'react';
import {
    View, Text,
    Modal, TouchableOpacity,
} from 'react-native';
import MyText from '../../components/MyText/MyText';
import MyTextInput from '../../components/MyTextInput/MyTextInput';
//styles
import { styles } from "./OTPSentStyle";
import MyButton from '../../components/MyButton/MyButton';
import { Colors, MyIcons, Service } from '../../global';

// Formik
// import { Formik, Form, Field } from 'formik';

// util
// import { verifyEmailSchema } from '../../util/schema/verifyEmailSchema'


const OTPSent = ({ visible, setVisibility, setShowValidateOTP }) => {
    //function : imp function
    const sendOTP = () => {
        closeModal()
        setShowValidateOTP(true)
    }
    //function :modal function 
    const closeModal = () => {
        setVisibility(false)
    }

    const [email,setEmail] =  useState('')


    //UI
    return (
        <Modal
            visible={visible}
            onRequestClose={closeModal}
            animationType="fade"
            transparent={true}
        >
            <View style={styles.container}>
                <TouchableOpacity style={styles.blurView} onPress={closeModal} />
                <View style={styles.mainView}>
                    <MyText
                        text="Enter your registred email address"
                        fontFamily="BOLD"
                        fontSize={20}
                        textAlign="center"
                    />
                    <MyTextInput
                        Title="Email Address"
                        placeholder={"Enter contact number"}
                        name="email"
                        values={email}
                        setValue={setEmail}
                        underlineColor='#717171'
                        isBorder={true}
                        InputIcons={<MyIcons.FetherIcon name="mail" size={18} />}
                        maxLength={38}
                        style={{marginVertical:10}}
                    />
                    <MyButton
                        Title="Submit"
                        backgroundColor={Colors.THEME_COLOR}
                        style={{ padding:0}}
                        onPress={sendOTP}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default OTPSent;
