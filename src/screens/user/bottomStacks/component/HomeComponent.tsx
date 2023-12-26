import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Ionicons from 'react-native-vector-icons/Ionicons';
import TextUi from '../../../../lib/ui/TextUi';
import { Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import ButtonUi from '../../../../lib/ui/ButtonUi';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../../../contants/Theme';

export const Header = ({ headerText, headerIcon }: any) => {
    const navigation: any = useNavigation();
    return (
        <View style={[styles.center, { padding: 15, backgroundColor: "#fff", gap: 3 }]}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#00000020',
                borderRadius: 10,
                backgroundColor: theme.gray,
                position: "relative",
                flex: 1,
            }}>
                <Ionicons style={styles.leftContent} name={"search"} size={32} />
                <TextInput
                    style={[styles.input]}
                    placeholder='Search Product'
                    placeholderTextColor={"gray"}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Cart")
                }}
                style={{
                    position: "relative",
                }}>
                <Ionicons style={[styles.center, { fontSize: 35, padding: 5, color: theme.primaryText }]} name={"cart"} size={32} />
                <TextUi style={{
                    position: "absolute",
                    right: 2,
                    top: -2,
                    backgroundColor: "red",
                    borderRadius: 112,
                    fontSize: 10,
                    paddingHorizontal: 4,
                    paddingVertical: 2.5,
                    color: "white",
                    fontWeight: '500',
                }}>23</TextUi>
            </TouchableOpacity>
        </View>
    );
};

export const AddresHeader = () => {
    return (
        <View style={[styles.center, { paddingHorizontal: 15, gap: 5 }]}>
            <Ionicons name={"location"} size={22} color={theme.primaryText} />
            <TextUi mode='p3' style={{ fontSize: 15 }}>Deliver to bhopal - 844444</TextUi>
            <MaterialIcons name="arrow-drop-down" size={22} color='gray' />
        </View>
    )
}

export const ProductCard = (props: any) => {
    const navigation: any = useNavigation()
    return (
        <View style={[{
            position: 'relative',
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            width: "100%",
            flex: 1,
            borderWidth: 1,
            borderColor: theme.gray,
        }, props.style]}>
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
            <TextUi numberOfLines={2} mode="p2" style={{
                fontSize: 14,
                width: "100%",
            }}>
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
            }} label="View Product"
                onPress={() => {
                    navigation.navigate("ViewProduct")
                }} />
        </View>
    );
};


export const SmallSlider = (props: any) => {
    return (
        <View
            style={{
                height: 38,
                backgroundColor: theme.gray,
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
        <SafeAreaView style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: "center",
            gap: 5,
            padding: 20,
            paddingBottom: 5,
        }}>
            <Text style={{ fontSize: 20, color: 'black', fontWeight: '600', textTransform: 'capitalize' }}>
                price slash alert
            </Text>
            <View style={[styles.center, { gap: 10 }]}>
                {/* <Text style={{ fontSize: 15, color: 'black', fontWeight: '400', }}>View All</Text> */}
                <AntDesign name="rightcircleo" size={18} color='gray' />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    center: {
        flexDirection: "row",
        alignItems: "center"
    },
    productImage: {
        width: "80%",
        height: 100,
        borderRadius: 10,
        marginVertical: 10,
    },
    leftContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        fontSize: 22,
        fontWeight: "500",
        // borderRightWidth: 2,
        borderColor: '#00000020',
        color: "#00000090"
    },
    input: {
        flex: 1,
        color: "black",
        fontSize: 17,
        marginLeft: 0,
    }
});
