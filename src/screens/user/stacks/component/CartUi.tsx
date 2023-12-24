import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextUi from '../../../../lib/ui/TextUi';
import ButtonUi from '../../../../lib/ui/ButtonUi';

export const CartItemCard = () => {
    return (
        <View style={{
            borderWidth: 1,
            borderColor: "#11111130",
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor:"white"
        }}>
            <View
                style={{
                    flexDirection: 'row',
                    padding: 10,
                    gap: 15,

                }}>
                {/* left side */}
                <View>
                    <Image
                        source={require('../../../../assets/Products/1.jpeg')}
                        style={{ width: 80, height: 80, resizeMode: 'contain', }}
                    />
                    <TextUi
                        mode="sm1"
                        style={{
                            textAlign: 'center',
                            padding: 4,
                            borderRadius: 3,
                            borderWidth: 0.6,
                            borderColor: 'gray',
                            letterSpacing: 1,
                            fontWeight: '400',

                        }}>
                        Qty:1
                    </TextUi>
                </View>
                {/* right side content */}
                <View style={{ flex: 1, gap: 2 }}>
                    <TextUi mode='p3' >BELLISSIOMO ULTRA FINE </TextUi>
                    <TextUi mode='sm2' numberOfLines={1}> Premium Sanitary Pads,280mm. *Extra Large*</TextUi>
                    <TextUi style={{
                        marginVertical: 10
                    }}>
                        {[1, 2, 3, 4].map(e => {
                            return <Ionicons name="star" size={20} color="black" key={e} />;
                        })}
                    </TextUi>
                    <View style={{ flexDirection: 'row', gap: 10, alignItems: "center" }}>
                        <TextUi mode='p1'>$45</TextUi>
                        <TextUi mode='p2' style={{
                            textDecorationLine: 'line-through'
                        }}>$30</TextUi>
                        <TextUi mode='p2' style={{
                            color: "green"
                        }}>30% off</TextUi>
                    </View>
                </View>
            </View>
            {/* end */}
            <TextUi mode='sm1' style={{
                fontWeight: '400',
                margin: 10,
                marginTop: 0,
            }}>Deliver by wed dec 2</TextUi>
            <View style={{ flexDirection: "row", backgroundColor: "#00000010" }}>
                <ButtonUi label='remove' mode='outlined' ButtonStyle={[styles.cartBtn]} />
                <ButtonUi label='buy this now' ButtonStyle={styles.cartBtn} />
            </View>
        </View>
    );
};

export const PlaceOrderCart = () => {
    return (
        <View style={{
            width: '100%',
            backgroundColor: 'white',
            // paddingBottom: 100
        }}>
            <TextUi mode="p1" style={{ margin: 10 }}>
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
                padding: 3,
                backgroundColor: "white",
                // position: "absolute",
                bottom: 0,
            }}>
                <View style={{ padding: 10, flex: 1 }}>
                    <TextUi mode='sm2'>
                        You save 250 on this order
                        {/* <TextUi mode='p3' style={{textDecorationLine: 'line-through'}}>14,279</TextUi> */}
                    </TextUi>
                    <TextUi mode='p1' >14,279</TextUi>
                </View>
                <ButtonUi label='place order' ButtonStyle={{ paddingVertical: 10, paddingHorizontal: 20 }} textStyle={{ fontSize: 15 }} />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    cartBtn: {
        paddingVertical: 10,
        flex: 1,
        borderRadius: 0,
        borderColor: "#00000000",
        borderWidth: 0,
    }
});