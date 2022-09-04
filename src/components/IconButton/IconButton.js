import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../../global';

const IconButton = ({
    Icon,
    onPress=()=>{},
    backgroundColor=Colors.THEME_COLOR,
    borderRadius=5,
}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
            style={{
                borderWidth: 1,
                height: 30,
                width: 30,
                borderRadius: borderRadius,
                justifyContent: "center",
                alignItems: "center",
                margin:5,
                backgroundColor:backgroundColor,
            }}
        >
           {Icon}
        </TouchableOpacity>
    )
}

export default IconButton;
