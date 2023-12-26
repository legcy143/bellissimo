import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextUi from '../../../../lib/ui/TextUi'
import AccordianUi from '../../../../lib/ui/AccordianUi'
import ButtonUi from '../../../../lib/ui/ButtonUi'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { theme } from '../../../../contants/Theme'

export const ProductBaiscDetail = () => {
    return (
        <View style={{
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
            <TextUi mode='sm1' style={{ fontWeight: '500' }}>4.5 star  (2 rating)</TextUi>
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
                <View style={[styles.center, { justifyContent: "flex-start", gap: 10 }]}>
                    <MaterialCommunityIcons name='truck-fast-outline'
                        size={20}
                        color={"gray"} />
                    <TextUi mode='p2'>Delivery by fri , 15 dec , free shiping</TextUi>
                </View>
                <View style={[styles.center, { justifyContent: "flex-start", gap: 10 }]}>
                    <MaterialCommunityIcons name='home-city-outline'
                        size={20}
                        color={"gray"} />
                    <TextUi mode='p2'>Cash on delivery available</TextUi>
                </View>
                <View style={[styles.center, { justifyContent: "flex-start", gap: 10 }]}>
                    <MaterialCommunityIcons name='cash-remove'
                        size={20}
                        color={"gray"} />
                    <TextUi mode='p2'>The product is non refundable</TextUi>
                </View>
            </View>
        </View>
    )
}


export const Offers = () => {
    return (
        <View>
            <View style={[styles.center, { justifyContent: "space-between" }]}>
                <TextUi mode='p2'>Offers</TextUi>
                <View style={[styles.center, { gap: 10 }]}>
                    <TextUi mode='sm1'>+4 Offers</TextUi>
                    <AntDesign name="rightcircleo" size={18} color={theme.primaryText} />
                </View>
            </View>
            <View style={[styles.borderd, styles.center, {
                gap: 10,
            }]}>
                <MaterialCommunityIcons name="label-percent-outline" size={32} color={theme.primaryText} />
                <View style={{ flex: 1 }}>
                    <TextUi mode='p2'>50 + bulk order , get 2 free</TextUi>
                    <TextUi mode='sm2'>Term & Condition</TextUi>
                </View>
            </View>
            {/* cingle card */}
            <View style={[styles.borderd, styles.center, {
                gap: 10,
            }]}>
                <MaterialCommunityIcons name="label-percent-outline" size={32} color={theme.primaryText} />
                <View style={{ flex: 1 }}>
                    <TextUi mode='p2'>50 + bulk order , get 2 free</TextUi>
                    <TextUi mode='sm2'>Term & Condition</TextUi>
                </View>
            </View>
            {/* offers */}
        </View>
    )
}

export const SelectVArient = () => {
    return (
        <View>
            {/* select varient */}
            <TextUi mode='p2' style={{ margin: 5 }}>Select Variant</TextUi>
            <AccordianUi title="quanity : " val="40 pants">
                <ScrollView
                    contentContainerStyle={{
                        flexDirection: "row",
                        padding: 20,
                        gap: 10,
                        position: "relative",
                    }}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <ButtonUi mode='outlined' label={"10"} />
                    <ButtonUi mode='outlined' label={"30"} />
                    <ButtonUi mode='outlined' label={"50"} />
                    <ButtonUi mode='outlined' label={"60"} />
                </ScrollView>
            </AccordianUi>
        </View>
    )
}

export const CostumerReviews = () => {
    return (
        <View>
            <TextUi mode='p1'>Customer Reviews</TextUi>
            <View style={[styles.borderd]}>
                <TextUi mode='p2'>
                    4.5
                    {[1, 2, 3, 4].map((e) => (
                        <MaterialCommunityIcons name="star" size={18} color={theme.primaryText} />
                    ))}
                    <MaterialCommunityIcons name="star-half" size={18} color={theme.primaryText} />
                    out of 5
                    <MaterialCommunityIcons name="star" size={18} color={theme.primaryText} />
                </TextUi>
                <TextUi mode='sm2'>(1 rating , 1 reviews)</TextUi>
            </View>
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
        borderColor: "00000020"
    },
    cartBtn: {
        paddingVertical: 18,
        flex: 1,
        borderRadius: 0,
    }
})