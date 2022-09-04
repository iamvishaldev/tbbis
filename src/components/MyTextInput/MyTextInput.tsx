// react components
import React from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'

// custom components
import MyText from '../MyText/MyText'
import { MyIcons } from '../../global'

// global
import { Colors, Fonts } from '../../global'

interface Props {
  value: string,
  Title: string,
  setValue: any,
  isBorder: boolean,
  placeholder: string,
  onPress: any,
  InputIcons: any,
  keyboardType: "default" | "number-pad" | "numeric",
}


const MyTextInput: React.FC<Props> = ({
  value,
  Title,
  isBorder = false,
  placeholder,
  keyboardType = "default",
  InputIcons,
  setValue = () => { },
  onPress = () => { },
}) => {
  return (
    <View>
      <MyText
        text={Title}
        fontFamily="SEMI_BOLD"
        style={{ marginVertical: 5}}
      />
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: Colors.WHITE,
          height: 40,
          borderRadius: 10,
          borderWidth: isBorder ? 0.5 : 0,
          elevation: 1,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        {InputIcons}
        <TextInput
          value={value}
          onChangeText={(text) => setValue(text)}
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={{ width: "90%", color: Colors.BLACK, fontFamily: Fonts.SEMI_BOLD, paddingLeft: 10 }}
        />
      </TouchableOpacity>
    </View>

  )
}

export default MyTextInput

const styles = StyleSheet.create({})