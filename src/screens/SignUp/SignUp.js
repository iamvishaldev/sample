import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
// components
import MyText from '../../components/MyText/MyText'
// styles
import { styles } from './SignUpStyle'
// global
import { Colors } from '../../global'
import MyHeader from '../../components/MyHeader/MyHeader'

const SignUp = () => {

    const [userEmail, setUserEmail] = useState("")

    const handleTextInput = (text) => {
        setUserEmail(text)
    }

    return (
        <View style={styles.container}>
            <MyHeader text={"SignUp"} />
            <MyText text={"Welcome to"} color={Colors.BLACK} fontSize={20} />
            <MyText text={"KinenGo"} color={Colors.BLACK} fontSize={24} />
            <TextInput value={userEmail} placeholder="Enter useremail" color={Colors.BLACK} onChangeText={(text) => handleTextInput(text)} />
        </View>
    )
}

export default SignUp


