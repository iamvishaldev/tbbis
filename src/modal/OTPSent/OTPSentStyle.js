import { StyleSheet } from "react-native";
import { Colors } from "../../global";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLACK + '77',
    },
    blurView: {
        flex: 1
    },
    mainView: {
        backgroundColor: Colors.WHITE,
        margin: 10,
        justifyContent: "center",
        padding: 50,
        borderRadius: 20,
    },
})