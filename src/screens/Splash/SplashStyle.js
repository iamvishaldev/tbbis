import { StyleSheet} from 'react-native'

// global
import { Colors } from '../../global'

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.WHITE,
        justifyContent:'center',
        alignItems:'center'
    },
    appLogoStyle:{
        height:250,
        width:250,
        resizeMode:'contain'
    }
})
