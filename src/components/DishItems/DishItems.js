import React, { Fragment } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../global';
import MyText from '../MyText/MyText';

const DishItems = (
    {
        itemName,
        itemDesc,
        itemPrice,
        style,
        fontSize,
        color = Colors.BLACK,
        fontFamily,
        imageUrl
    }
) => {
    const styles = StyleSheet.create({
        textStyle: {
            color: color,
            fontSize: fontSize,
            fontFamily: fontFamily,
            ...style,
        }
    })
    return (
        <Fragment>
            <View style={{ flexDirection: 'row', marginVertical: 8, padding: 2 }}>
                <TouchableOpacity>
                    <Image
                        source={{
                            uri: imageUrl
                        }}
                        style={{ height: 60, width: 60, borderRadius: 5 }}
                    />
                </TouchableOpacity>
                <View style={{ marginLeft: 10 }}>
                    <MyText text={itemName} fontWeight={'bold'} />
                    <MyText text={itemDesc} style={{ width: '80%' }} />
                    <MyText text={`$ ${itemPrice}`} color={Colors.THEME_COLOR} fontWeight={'bold'} />
                </View>
            </View>
            <View style={{ borderBottomWidth: 0.5, borderBottomColor: Colors.LITE_GRAY }} />
        </Fragment>
    );
};

export default DishItems;
