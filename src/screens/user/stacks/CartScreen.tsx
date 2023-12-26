import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CartItemCard, PlaceOrderCart } from './component/CartUi'
import { TitleNav } from '../../../lib/ui/Navbarui'
import TextUi from '../../../lib/ui/TextUi'
import ButtonUi from '../../../lib/ui/ButtonUi'

const CartScreen = () => {
    return (
        <View>
            <ScrollView contentContainerStyle={{
                height: "auto"
            }}>
                <View style={{
                    backgroundColor: "white",
                    padding: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    marginVertical: 5,

                }}>
                    <View style={{ flex: 1 }}>
                        <TextUi mode='p3' numberOfLines={1} style={{
                            fontSize: 15,
                            textTransform: "capitalize"
                        }}>deliver to : <TextUi mode='p2' style={{
                            fontSize: 16
                        }}>rahul sign 43,33</TextUi></TextUi>
                        <TextUi mode="p3" numberOfLines={1} style={{
                            textTransform: "capitalize",
                            opacity: 0.7, fontSize: 15
                        }}>punjab chaddigarg mumbai wankhede stadium</TextUi>
                    </View>
                    <ButtonUi label='change' mode='outlined' ButtonStyle={{ paddingVertical: 7 }} textStyle={{ fontSize: 14 }} />
                </View>
                <View style={{
                    gap: 5,
                    marginBottom: 5,
                }}>
                    <CartItemCard />
                </View>
                <PlaceOrderCart />
            </ScrollView >
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({})