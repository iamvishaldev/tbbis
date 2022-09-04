import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
// component
import MyText from '../MyText/MyText'
// global
import { Colors } from '../../global'

interface Props {
 Title:string;
 backgroundColor:string;
 borderRadius:number;
 onPress:()=>{};
}

const MyButton:React.FC<Props>= ({
  Title,
  backgroundColor=Colors.WHITE,
  borderRadius=20,
  onPress=()=>{},
}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        width: "50%",
        borderRadius: borderRadius,
      }}
    >
      <MyText
        text={Title}
        fontFamily="BOLD"
        fontSize={14}
        textAlign="center"
      />
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({

})