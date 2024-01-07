import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextUi from '../../../../lib/ui/TextUi'
import { theme } from '../../../../contants/Theme'

export const OrderPricing = () => {
    return (
        <View style={{
            width: '100%',
            backgroundColor: 'white',
            // paddingBottom: 100
        }}>
            <TextUi mode="p1" style={{ margin: 10, marginBottom: 0 }}>
                Price Details
            </TextUi>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <View style={{ gap: 12, alignItems: "flex-start", padding: 15 }}>
                    <TextUi mode="p3">Price(1 items)</TextUi>
                    <TextUi mode="p3">Discount</TextUi>
                    <TextUi mode="p3">Coupons For You</TextUi>
                    <TextUi mode="p3">Delivery Charges</TextUi>
                </View>
                <View style={{ gap: 12, alignItems: "flex-end", padding: 15 }}>
                    <TextUi mode="p2">$43,999</TextUi>
                    <TextUi mode="p2" style={{ color: 'green' }}> -$29,000</TextUi>
                    <TextUi mode="p2" style={{ color: 'gray', }}>-$750</TextUi>
                    <TextUi mode="p2" >$30</TextUi>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderTopWidth: 0.4,
                    borderBottomWidth: 0.3,
                    borderStyle: 'dotted',
                    padding: 10
                }}>
                <TextUi mode="p1">Total Amount</TextUi>
                <TextUi mode='p2'>$14,279</TextUi>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: "center",
                padding: 10,
                backgroundColor: "white",
                // position: "absolute",
                bottom: 0,
            }}>
                <View style={{ padding: 0, flex: 1 }}>
                    <TextUi mode='sm2'>
                        You save 250 on this order
                    </TextUi>
                </View>
            </View>
        </View>
    )
}

export const ShipingDetail = () => {
    return (
        <View style={{
            backgroundColor: "white",
            padding: 10,
            position: "relative",
            marginVertical: 1,
        }}>
            <TextUi>shipping details</TextUi>
            <View style={{
                backgroundColor: "#00000030",
                // position:"absolute",
                height: 1,
                marginVertical: 5,
            }} />
            <TextUi mode='p1'>username goes here</TextUi>
            <TextUi mode='p3'>addres can be map here</TextUi>
            <TextUi mode='p3'>phone number goes here</TextUi>
        </View>
    )
}

export const ProductDetail = () => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 5, padding: 10, backgroundColor: "white" }}>
            <View style={{ gap: 5 }}>
                <TextUi numberOfLines={1} mode='p3' style={{
                    fontSize: 20,
                    textTransform: "capitalize"
                }}>product name goes here</TextUi>
                <TextUi numberOfLines={1}>quantity</TextUi>
                <TextUi numberOfLines={1} mode='p1'>500</TextUi>
            </View>
            <View style={{ width: 120, height: 120 }}>
                <Image
                    source={require('../../../../assets/Products/1.jpeg')}
                    style={{ width: "100%", height: "100%", resizeMode: 'contain', }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})