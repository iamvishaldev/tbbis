import { StyleSheet } from "react-native";
import { Colors } from "../../global";

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    linearGradient:{
        flex:1
    },
    titleStyle:{
        marginBottom:50,
    },
    mainView:{
        flex:1,
        padding:20,
        justifyContent:'space-between',
    },
    appLogoStyle:{
        width:200,
        height:200,
        borderRadius:10
    },
    TermAndConditionsView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20
    },
    // modal
    modalContainer:{
        flex:1,
        backgroundColor:Colors.BLACK + '77'
    },
    blurView:{
        flex:1
    },
    modalMainView:{
        backgroundColor: Colors.WHITE,
        margin: 10,
        justifyContent: "center",
        padding: 20,
        borderRadius: 20,
    }
})