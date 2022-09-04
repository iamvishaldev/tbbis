//react components
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/core';
//global
import { Colors, MyIcons, ScreensName } from '../../global';
import MyText from '../MyText/MyText';


interface Props {
    Title: string;
    isSetting: boolean;
}
const MyHeader: React.FC<Props> = ({
    Title,
    isSetting
}) => {
    //variables
    const navigation = useNavigation();
    //function :navigation function
    const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
    // const gotoSettings = () => navigation?.navigate(ScreensName.SETTINGS);
    const styles = StyleSheet.create({
        myHeaderView: {
            height: 50,
            flexDirection: "row",
            backgroundColor: Colors.THEME_COLOR,
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
        }
    })
    return (
        <View style={styles.myHeaderView}>
            <TouchableOpacity
                onPress={() => openDrawer()}
            >
                <MyIcons.FetherIcon name="menu" size={24} />
            </TouchableOpacity>
            <MyText
                text={Title}
                fontFamily="SEMI_BOLD"
                textColor="black"
                fontSize={18}
                textAlign="center"
            />
            {
                isSetting
                    ?
                    <TouchableOpacity
                        onPress={() => gotoSettings()}
                    >
                        <MyIcons.AntDesign name="setting" size={24} />
                    </TouchableOpacity>
                    :
                    <View style={{ width: "10%" }} />
            }
        </View>
    )
}

export default MyHeader;
