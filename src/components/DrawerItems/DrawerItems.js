//react components
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
//custom components
import MyText from '../MyText/MyText'
//global
import { Colors, MyIcons } from '../../global';


const DrawerItems = ({
    Title,
    Icon,
    onPress = () => { },
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                borderWidth: 1,
                borderRadius: 10,
                padding: 5,
                flexDirection: "row",
                // backgroundColor:Colors.THEME_COLOR,
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 5,
            }}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {Icon}
                <MyText
                    text={Title}
                    fontFamily="MEDIUM"
                    fontSize={16}
                    style={{ marginLeft: 10 }}
                />
            </View>
            <MyIcons.FetherIcon name="chevron-right" size={22} />
        </TouchableOpacity>
    )
}

export default DrawerItems;
