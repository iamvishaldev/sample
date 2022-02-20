import React, { useState } from 'react'
import { Image, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import Background from '../../components/Background/Background'
import MyText from '../../components/MyText/MyText'

// global
import { MyIcons, Colors } from '../../global'

// styles
import { styles } from './CheckOutStyle'

const Checkout = ({ navigation }) => {

    const userInfoData = useSelector(state => state.userInfoReducer.userInfo)

    console.log(userInfoData)

    //function : navigation function
    const goToOrderPage = () => navigation.goBack()

    //data
    // const paymentData = [
    //     { id: 1, name: "visa", contact: "**** **** **** 5967" },
    //     { id: 2, name: "paypal", contact: "wilson.casper@bernice.info" },
    //     { id: 3, name: "mastercard", contact: "**** **** **** 3461" },
    // ]
    //states
    const [selectedPayment, setSelectedPayment] = useState(0);
    //function :imp  function 
    const getIcon = (name) => {
        if (name == "visa") {
            return (
                <MyIcons.FontAwesome name={"cc-visa"} size={23} color={Colors.BLACK} />
            )
        } else if (name == "paypal") {
            return (
                <MyIcons.FontAwesome name={"paypal"} size={23} color={Colors.BLACK} />
            )
        } else {
            return (
                <MyIcons.FontAwesome name={"cc-mastercard"} size={23} color={Colors.BLACK} />
            )
        }

    }
    //function : render function 
    const paymentMethodRender = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => setSelectedPayment(index)}

                style={{ ...styles.paymentItem, borderWidth: selectedPayment == index ? 2 : 0 }}>
                <View style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
                    {getIcon(item.name)}
                    <MyText text={item.contact} style={{ marginLeft: 10 }} />
                </View>
                {
                    selectedPayment == index ?
                        <MyIcons.AntDesign name={"checkcircle"} size={20} color={Colors.THEME_COLOR} />
                        :
                        null
                }
            </TouchableOpacity>
        )
    }
    //UI
    return (
        <View style={styles.container}>
            <Background />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MyIcons.MaterialIcons name="arrow-back-ios" size={25} onPress={() => goToOrderPage()} />
                <MyText text={"Back"} color={Colors.WHITE} fontSize={20} />
            </View>
            <MyText text={"Checkout"} color={Colors.WHITE} fontSize={30} style={styles.CheckOutText} fontWeight={'bold'} />
            <ScrollView>
                <View style={styles.myCard}>
                    <MyText text={"DELIVERY ADDRESS"} fontSize={14} fontWeight={'bold'} style={{ padding: 10 }} />
                    <View style={styles.checkOutItem}>
                        <View>
                            <MyText
                                text="ADDRESS#1"
                                color={Colors.THEME_COLOR}
                            />
                            <MyText
                                text={userInfoData.address}
                            />
                        </View>
                        <MyIcons.AntDesign name={"checkcircle"} size={20} color={Colors.THEME_COLOR} />
                    </View>
                    <MyText
                        text="PAYMENT METHOD"
                        fontWeight={'bold'}
                        style={styles.CheckOutText}
                        style={{ padding: 10 }}
                    />
                    <FlatList
                        data={userInfoData.paymentData}
                        renderItem={paymentMethodRender}
                        keyExtractor={item => item.id}
                    />
                    <View style={{ marginVertical: 30 }}>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                        >
                            <Text style={styles.buttonTextStyle}>Payment</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', padding: 10 }}>
                    <TouchableOpacity>
                        <MyIcons.MaterialCommunityIcons name="fingerprint" size={70} color={Colors.LITE_GRAY} />
                    </TouchableOpacity>
                    <MyText
                        text="Pay with Touch ID"
                        fontSize={20}
                        fontWeight={'bold'}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default Checkout

// export const paymentItems = () => {
//     return (
//         <View>
//             <MyIcons.FontAwesome name={"cc-visa"} size={20} color={Colors.BLACK} />
//             <MyText text={"**********5967"} />
//         </View>
//     )
// }
