import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Ionicons from 'react-native-vector-icons/Ionicons';
import TextUi from '../../../../lib/ui/TextUi';
import { Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonUi from '../../../../lib/ui/ButtonUi';

export const Header = ({ headerText, headerIcon }: any) => {
    return (
        <View style={{ flexDirection: "row", padding: 10, backgroundColor: "#eeeeee" }}>
            <View style={[styles.Inputcontainer, { flex: 1 }]}>
                <Ionicons style={styles.leftContent} name={"search"} size={22} />
                <TextInput
                    style={[styles.input]}
                    placeholder='Search Product'
                    placeholderTextColor={"gray"}
                />
            </View>
            <Ionicons style={[styles.leftContent, { borderRightWidth: 0 }]} name={"cart"} size={22} />
        </View>
    );
};

export const AddresHeader = () => {
    return (
        <View style={[styles.center]}>
            <Ionicons style={[styles.leftContent, { borderRightWidth: 0 }]} name={"location"} />
            <TextUi mode='sm1'>india , punjab - 232322</TextUi>
            {/* <Ionicons style={[styles.leftContent, { borderRightWidth: 0  }]} name={"triangle"} /> */}
        </View>
    )
}

export const ProductCard = (props: any) => {
    return (
        <View style={[styles.container, props.style]}>
            <MaterialCommunityIcons
                style={{ position: 'absolute', top: 5, right: 6 }}
                name="heart-outline"
                size={25}
                color="black"
            />
            <Image
                source={require('../../../../assets/Products/1.jpeg')}
                style={styles.productImage}
                resizeMode="contain"
            />
            {/* <Textui mode='p1' style={{
  
        }}>hii</Textui> */}
            <TextUi numberOfLines={2} mode="sm1" style={{ fontSize: 12 }}>
                BELLISSIMO ULTRA FINE Premimum+Sanitary Pads, 280mm. *Extra Paids,
                280mm.*Extra Large*
            </TextUi>
            <View
                style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: 5,
                    width: '100%',
                    justifyContent: 'space-between',
                    marginLeft: 6,
                }}>
                <TextUi mode="sm2">$30</TextUi>
                <TextUi mode="sm2">30% Off</TextUi>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    gap: 5,
                    marginRight: "auto",
                    padding: 5,
                }}>
                <TextUi>4.5</TextUi>
                {[1, 2, 3, 4].map(e => {
                    return <Ionicons name="star" size={16} color="black" key={e} />;
                })}
            </View>
            <ButtonUi ButtonStyle={{
                width: "100%",
                paddingVertical: 7,
                paddingHorizontal: 7,
            }} textStyle={{
                margin: 0,
                padding: 0,
                fontSize: 15,
            }} label="Add To Cart" />
        </View>
    );
};


export const SmallSlider = (props: any) => {
    return (
        <View
            style={{
                height: 38,
                backgroundColor: '#D4D5CD',
                padding: 9,
                borderRadius: 5,
                alignItems: 'center',
                marginHorizontal: 5,
            }}>
            <Text
                style={{
                    textAlign: 'center',
                    fontSize: 15,
                    fontWeight: '600',
                    textTransform: 'capitalize',
                    color: 'black',
                }}>
                {props.message}
            </Text>
        </View>
    );
};

export const ViewMoreOption = () => {
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', gap: 5 }}>
            <View style={{ marginLeft: -15, padding: 5, marginTop: 20, }}>
                <Text style={{ fontSize: 20, color: 'black', fontWeight: '600', textTransform: 'capitalize' }}>
                    price slash alert
                </Text>
            </View>
            <View style={{ padding: 5, marginTop: 20, flexDirection: 'row', gap: 18 }}>
                <Text style={{ fontSize: 15, color: 'black', fontWeight: '200', }}>View All</Text>
                <AntDesign icon name="rightcircleo" size={22} color='gray' />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    center: {
        flexDirection: "row",
        alignItems: "center"
    },
    container: {
        position: 'relative',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        width: "100%",
        flex: 1,
        // height: 290,
    },
    productImage: {
        width: "80%",
        height: 100,
        borderRadius: 10,
        marginVertical: 10,
    },
    Inputcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#00000020',
        borderRadius: 10,
        padding: 1,
        // backgroundColor: '#E5E7EB',
        position: "relative",
    },
    leftContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        fontSize: 25,
        fontWeight: "500",
        borderRightWidth: 2,
        borderColor: '#00000020',
        color: "#00000090"
    },
    input: {
        flex: 1,
        color: "black",
        fontSize: 17,
    }
});
