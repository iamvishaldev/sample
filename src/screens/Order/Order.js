import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
// components
import Background from '../../components/Background/Background'
import DishItems from '../../components/DishItems/DishItems'
import MyText from '../../components/MyText/MyText'
// redux
import { useSelector } from 'react-redux'
// global
import { Colors, Fonts, ScreensName } from '../../global'

// styles
import { styles } from './OrderStyle'




const Order = ({ navigation }) => {

    const [totalPrice, setTotalPrice] = useState(0)

    const orderData = useSelector(state => state.orderReducer.ordersData)

    console.log(orderData)


    useEffect(() => {
        let total = 0;
        orderData.map((item) => {
            console.log(item)
            // setTotalPrice((prevPrice => item.price + prevPrice));
            total = item.price + total;
        })

        console.log(total);
        setTotalPrice(total)
    }, [])

    //function : navigation function
    const goToCheckOutPage = () => navigation?.navigate(ScreensName.CHECKOUT)

    return (
        <View style={styles.container}>
            <Background />
            <View style={styles.HeaderStyle}>
                <MyText text={"Order"} fontSize={25} color={Colors.WHITE} fontWeight={'bold'} />
                <MyText text={"Close"} fontSize={18} color={Colors.WHITE} />
            </View>
            <ScrollView>
                <View style={styles.boxStyle}>
                    <View style={styles.flexrowStyle}>
                        <MyText text={"Subtotal"} fontWeight={'bold'} />
                        <MyText text={"$49.50"} color={Colors.LITE_GRAY} />
                    </View>
                    <View style={styles.flexrowStyle}>
                        <MyText text={"Tax & Fee"} fontWeight={'bold'} />
                        <MyText text={"$2.75"} color={Colors.LITE_GRAY} />
                    </View>
                    <View style={styles.flexrowStyle}>
                        <MyText text={"Delivery"} fontWeight={'bold'} />
                        <MyText text={"Free"} color={Colors.LITE_GRAY} />
                    </View>
                    <View style={{ borderBottomWidth: 0.5, borderBottomColor: Colors.LITE_GRAY }} />
                    <View style={styles.flexrowStyle}>
                        <MyText text={"Total"} fontSize={25} fontWeight={'bold'} />
                        <MyText text={`$ ${totalPrice}`} fontSize={25} fontWeight={'bold'} />
                    </View>
                </View>
                <View style={styles.boxStyle}>
                    {
                        orderData && orderData.map((currentItem) => (
                            <DishItems
                                itemName={currentItem.name}
                                itemDesc={currentItem.dec}
                                itemPrice={currentItem.price}
                                imageUrl={currentItem.img}
                            />
                        ))
                    }
                </View>
                <View style={{ height: 20 }} />
                <View style={{ flex: 1, justifyContent: "flex-end", }}>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => goToCheckOutPage()}
                    >
                        <Text style={styles.buttonTextStyle}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    )
}

export default Order


