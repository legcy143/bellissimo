import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CartItemCard, PlaceOrderCart } from './component/CartUi'
import { TitleNav } from '../../../lib/ui/Navbarui'
import TextUi from '../../../lib/ui/TextUi'
import ButtonUi from '../../../lib/ui/ButtonUi'

const CartScreen = () => {
    return (
        <ScrollView>
            <View style={{
                position:"relative"
            }}>
                <TitleNav pagetitle="My Cart" />
                <View style={{
                    backgroundColor: "white",
                    padding: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5
                }}>
                    <View style={{ flex: 1 }}>
                        <TextUi mode='p3' numberOfLines={1}>delever to : <TextUi mode='p2'>rahul sign 43,33</TextUi></TextUi>
                        <TextUi mode="sm2" numberOfLines={1}>punjab chaddigarg mumbai wankhede stadium</TextUi>
                    </View>
                    <ButtonUi label='change' mode='outlined' ButtonStyle={{ paddingVertical: 7 }} textStyle={{ fontSize: 14 }} />
                </View>
                <View style={{
                    padding: 5,
                    gap: 5,
                }}>
                    <CartItemCard />
                    <CartItemCard />
                    <CartItemCard />
                    <CartItemCard />
                </View>
                <PlaceOrderCart />
            </View>
        </ScrollView>
    )
}

export default CartScreen

const styles = StyleSheet.create({})