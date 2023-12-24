import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TitleNav } from '../../../lib/ui/Navbarui'
import ButtonUi from '../../../lib/ui/ButtonUi'
import ImageSlider from '../../../lib/ui/ImageSlider'
import TextUi from '../../../lib/ui/TextUi'
import AccordianUi from '../../../lib/ui/AccordianUi'
import { DeliveryAndService, ProductBaiscDetail } from './component/ViewProductUi'

const ViewProductScreen = ({ navigation }: any) => {

    return (
        <View>
            <TitleNav />
            <ScrollView
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ paddingBottom: 60 }}>
                    <ImageSlider />
                    <ProductBaiscDetail />
                    {/* padding container */}
                    <View style={{ padding: 10 }}>
                        {/* select varient */}
                        <TextUi mode='p2' style={{ margin: 5 }}>Select Variant</TextUi>
                        <AccordianUi />
                        <DeliveryAndService />
                    </View>

                    {/* buy and add to cart container */}
                    <View style={[styles.center, {
                        marginTop: "auto",
                        bottom: 0,
                    }
                    ]}>
                        <ButtonUi ButtonStyle={styles.cartBtn} mode='outlined' label='Add to cart' />
                        <ButtonUi ButtonStyle={styles.cartBtn} label='Buy now' onPress={() => navigation.navigate("BottomNavigation", {
                            screen: "Profile"
                        })} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ViewProductScreen


const styles = StyleSheet.create({
    center: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    cartBtn: {
        paddingVertical: 18,
        flex: 1,
        borderRadius: 0,
    }
})