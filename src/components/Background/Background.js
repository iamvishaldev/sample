import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../../global';
import { height } from '../../global/Constants';

const Background = () => {
    return (
        <View style={{
            backgroundColor: Colors.THEME_COLOR,
            position: "absolute",
            right: 0,
            left: 0,
            height: height / 4,
            borderBottomLeftRadius: 80,
            borderBottomRightRadius: 80
        }}
        />
    )
}

export default Background;
