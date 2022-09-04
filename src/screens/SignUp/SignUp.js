//react components
import React, { useState, useRef } from 'react';
import {
    View, KeyboardAvoidingView,
    ScrollView, Alert,
} from 'react-native';
//custom components
import MyText from '../../components/MyText/MyText';
import MyTextInput from '../../components/MyTextInput/MyTextInput';
import MyRadioButton from '../../components/MyRadioButton/MyRadioButton';
import MyButton from '../../components/MyButton/MyButton';
//third parties
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
//global
import { Colors, MyIcons, ScreensName, Service } from '../../global';

import LinearGradient from 'react-native-linear-gradient';

//styles
import { styles } from "./SignUpStyle";

const SignUp = ({ navigation }) => {
    //useRef
    const contactNumberRef = useRef();
    const emailRef = useRef();
    const fullNameRef = useRef();
    const userNameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    //variables
    const Icon_Size = 18;
    //states
    const [ContactNumber, setContactNumber] = useState('');
    const [Email, setEmail] = useState('');
    const [FullName, setFullName] = useState('');
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [BirthdayDate, setBirthdayDate] = useState(new Date());
    const [SelectedGender, setSelectedGender] = useState(0);
    const [showCalendar, setshowCalendar] = useState(false);
    const [Validate, setValidate] = useState(false);
    //data
    const GenderData = [
        {
            id: 1,
            type: "Male"
        },
        {
            id: 2,
            type: "Female"
        },
        {
            id: 3,
            type: "Other"
        },
    ]
    //function : navigation funcion 
    const goBackToSignIn = () => navigation.navigate(ScreensName.SIGN_IN);
    const gotoSignUp = () => navigation.navigate(ScreensName.SIGN_UP)
    //function : imp function 
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || BirthdayDate;
        setBirthdayDate(currentDate)
        setshowCalendar(false)
    };

    //UI
    return (
        <LinearGradient colors={[Colors.THEME_COLOR, Colors.WHITE]} style={{ flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "padding "}
                style={styles.container}
            >

                <MyText
                    text="Sign Up"
                    fontFamily="EXTRA_BOLD"
                    fontSize={24}
                    textAlign="center"
                    style={styles.TitleStyle}
                />
                <ScrollView
                    style={styles.mainView}>

                    <MyTextInput
                        TextInputRef={contactNumberRef}
                        value={ContactNumber}
                        setValue={setContactNumber}
                        maxLength={10}
                        Title="Contact Number"
                        placeholder="Enter contact number"
                        keyboardType="number-pad"
                        InputIcons={<MyIcons.FetherIcon name="smartphone" size={Icon_Size} />}
                        onSubmitEditing={() => emailRef.current.focus()}
                    />
                    <MyTextInput
                        TextInputRef={emailRef}
                        value={Email}
                        setValue={setEmail}
                        Title="Email"
                        placeholder="Enter email"
                        InputIcons={<MyIcons.FetherIcon name="mail" size={Icon_Size} />}
                        onSubmitEditing={() => fullNameRef.current.focus()}
                    />
                    <MyTextInput
                        TextInputRef={fullNameRef}
                        value={FullName}
                        setValue={setFullName}
                        Title="Full Name"
                        placeholder="Enter full name"
                        InputIcons={<MyIcons.FetherIcon name="user-check" size={Icon_Size} />}
                        onSubmitEditing={() => userNameRef.current.focus()}
                    />
                    <MyTextInput
                        TextInputRef={userNameRef}
                        value={UserName}
                        setValue={setUserName}
                        Title="Username"
                        placeholder="Enter username"
                        InputIcons={<MyIcons.FetherIcon name="user" size={Icon_Size} />}
                        onSubmitEditing={() => userNameRef.current.focus()}
                    />
                    <MyText
                        text="Gender"
                        fontFamily="SEMI_BOLD"
                    />
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                        {
                            GenderData.length > 0
                                ?
                                GenderData.map((item, index) => (
                                    <MyRadioButton
                                        key={index.toString()}
                                        index={index}
                                        name={item.type}
                                        value={SelectedGender}
                                        setValue={setSelectedGender}
                                    />
                                ))
                                :
                                null
                        }
                    </View>
                    <MyTextInput
                        Title="Birthday"
                        InputIcons={<MyIcons.AntDesign name="calendar" size={22} />}
                        placeholder={moment(BirthdayDate).format('LL')}
                        onPress={() => setshowCalendar(true)}
                        // setValue={setBirthdayDate}
                        editable={true}
                        disabled={false}
                    />
                    <MyTextInput
                        TextInputRef={passwordRef}
                        value={Password}
                        setValue={setPassword}
                        Title="Password"
                        placeholder="Enter password"
                        InputIcons={<MyIcons.FetherIcon name="lock" size={Icon_Size} />}
                        secureTextEntry={true}
                        onSubmitEditing={() => confirmPasswordRef.current.focus()}
                    />
                    <MyTextInput
                        TextInputRef={confirmPasswordRef}
                        value={ConfirmPassword}
                        setValue={setConfirmPassword}
                        Title="Confirm Password"
                        placeholder="Enter confirm password"
                        InputIcons={<MyIcons.FetherIcon name="lock" size={Icon_Size} />}
                        secureTextEntry={true}
                        onSubmitEditing={() => confirmPasswordRef.current.focus()}
                    />
                    <View style={{ height: 30 }} />
                    <MyButton
                        Title="Sign Up"
                        onPress={() => gotoSignUp()}
                    />
                    <View style={{
                        flexDirection: "row",
                        marginVertical: 10,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <View style={{ borderTopWidth: 1, width: "40%", marginTop: 5 }} />
                        <MyText
                            text="OR"
                            style={{ marginHorizontal: 10 }}
                        />
                        <View style={{ borderTopWidth: 1, width: "40%", marginTop: 5 }} />
                    </View>
                    <MyText
                        text="Already have an account? Sign In"
                        textAlign="center"
                        fontFamily="SEMI_BOLD"
                        fontSize={10}
                        onPress={() => goBackToSignIn()}
                        style={{ marginVertical: 10 }}
                    />
                    <View style={{ height: 30 }} />
                </ScrollView>

                {showCalendar && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={BirthdayDate}
                        mode="date"
                        display="default"
                        onChange={onChange}
                    />
                )}
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}

export default SignUp;
