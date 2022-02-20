import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, MyIcons } from '../../global'
// component
import MyText from '../MyText/MyText'
import { styles } from './MyHeaderStyle'

const MyHeader = ({
    text
}) => {
    return (
        <View style={styles.container}>
            <MyIcons.Ionicons name="arrow-back" size={20} color={Colors.BLACK} />
            <MyText text={text} color={Colors.BLACK} fontSize={20} />
            <View style={{ width: '5%' }} />
        </View>
    )
}

export default MyHeader


