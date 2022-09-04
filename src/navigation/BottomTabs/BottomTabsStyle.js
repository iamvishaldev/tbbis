import { StyleSheet } from "react-native";
import { Colors } from "../../global";

export const styles = StyleSheet.create({
    TabStyleView:{
        backgroundColor:Colors.THEME_COLOR,
        height:60,
        margin:10,
        borderRadius:20,
        // borderTopRightRadius:20,
        // borderTopLeftRadius:20,
        justifyContent:"center",
        alignItems:"center",
    },
    myIconView:{
        height:50,
        width:50,
        justifyContent:"center",
        alignItems:"center",
        elevation:4,
        borderRadius:100,
        backgroundColor:Colors.THEME_COLOR,
        // position:"absolute",
        top:-10,
    },
    MyFocusedLabelStyle:{
        top:-20,
        marginVertical:10,
    },
})