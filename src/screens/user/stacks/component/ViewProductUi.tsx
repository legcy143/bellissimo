import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextUi from '../../../../lib/ui/TextUi'

export const ProductBaiscDetail = () => {
    return (
        <View style={{
            padding: 10,
            gap: 5,
        }}>
            <TextUi mode='p1' numberOfLines={2}>Product goes name goes here so what is name of product </TextUi>
            <View style={[styles.center, { justifyContent: "flex-start", gap: 5 }]}>
                <TextUi mode='p1'>400</TextUi>
                <TextUi mode='sm1' style={{
                    textDecorationLine: 'line-through',
                    opacity: 0.7,
                }}>400</TextUi>
                <TextUi mode='sm1'>(30% off)</TextUi>
            </View>
            <TextUi mode='sm1'>Inclusive Of All Taxes</TextUi>
            <TextUi mode='sm1'>4.5 rating  (2 rating)</TextUi>
        </View>
    )
}

export const DeliveryAndService = () => {
    return (
        <View style={{
            marginVertical: 10,
        }}>
            <TextUi mode='p2'>Delivery & Service</TextUi>
            <View style={[styles.center, styles.borderd, {
                justifyContent: "space-between"
            }]}>
                <TextUi mode='p2'>123456</TextUi>
                <TextUi mode='sm1'>Available</TextUi>
            </View>
            <View style={{
                opacity: 0.7,
                gap: 5,
            }}>
                <TextUi mode='p2'>Delivery by fri , 15 dec , free shiping</TextUi>
                <TextUi mode='p2'>Cash on delivery available</TextUi>
                <TextUi mode='p2'>the product is non refundable</TextUi>
            </View>
        </View>
    )
}


const Offers = () => {
    return (
        <View>

        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    borderd: {
        marginVertical: 10,
        borderRadius: 5,
        padding: 13,
        borderWidth: 1.5,
        borderColor: "#00000050"
    },
    cartBtn: {
        paddingVertical: 18,
        flex: 1,
        borderRadius: 0,
    }
})