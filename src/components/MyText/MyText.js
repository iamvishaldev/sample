import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Colors } from '../../global'

const MyText = ({
    text,
    style,
    fontSize,
    color = Colors.BLACK,
    fontFamily,
    fontWeight,
    onPress = () => { }
}) => {
    const styles = StyleSheet.create({

        textStyle: {
            color: color,
            fontSize: fontSize,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            ...style,
        }
    })
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    )
}

export default MyText


