import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TitleNav } from '../../../lib/ui/Navbarui'
import ButtonUi from '../../../lib/ui/ButtonUi'
import ImageSlider from '../../../lib/ui/ImageSlider'
import TextUi from '../../../lib/ui/TextUi'
import { CostumerReviews, DeliveryAndService, Offers, ProductBaiscDetail, SelectVArient } from './component/ViewProductUi'
import { Products } from '../../../assets/Products'

const ViewProductScreen = ({ navigation }: any) => {
    return (
        <View style={{
            backgroundColor: "#fff"
        }}>
            <ScrollView
                nestedScrollEnabled={true}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ paddingBottom: 60 }}>
                    <ImageSlider imgArr={Products} />
                    <View style={{ padding: 15, gap: 10 }}>
                        <ProductBaiscDetail />
                        <SelectVArient />
                        <DeliveryAndService />
                        <Offers />
                        <CostumerReviews />
                    </View>
                    {/* padding container */}

                    {/* buy and add to cart container */}
                </View>
            </ScrollView>
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