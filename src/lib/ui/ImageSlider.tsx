import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import TextUi from './TextUi';
import { FlatList } from 'react-native';
const { width } = Dimensions.get('window');
import img1 from "../../assets/logo_big.png"

interface ImageSliderProps {
    imgArr: any[]
}

export default function ImageSlider({ imgArr = [] }: ImageSliderProps) {
    console.log("in image slider", imgArr)
    const scrollValue = useRef(new Animated.Value(0)).current;
    const translateX = scrollValue.interpolate({
        inputRange: [0, width],
        outputRange: [0, 20],
    });

    // <Image source={{ uri: item}} style={{ height: "100%", width: "100%" }} />
    // <Image source={item} style={{ height: "100%", width: "100%" }} />
    // console.log("item", item)
    let arr = [
        { id: 1, img: "../../assets/logo_big.png" },
        { id: 2, img: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }
    ]
    const renderImageItem = ({ item }: any) => (
        <Image source={{ uri: item.img }} style={{ height: "100%", width: "100%" }} />
    );

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
                    { useNativeDriver: false },
                )}>
                {arr.map(x => {
                    return (
                        <View style={[styles.card, { backgroundColor: "green" }]} key={x.id} >
                            <TextUi> image goes here </TextUi>
                            <Image source={require(x.img)} style={{ height: "100%", width: "100%" }} />
                        </View>
                    )
                })}
            </ScrollView>
            <View style={styles.indicatorConatiner} pointerEvents="none">
                {imgArr.map(x => (
                    <Indicator x={x} key={x} />
                ))}
                <Animated.View
                    style={[
                        styles.activeIndicator,
                        { position: 'absolute', transform: [{ translateX }] },
                    ]}
                />
            </View>
        </View>
    );
}

function Indicator() {
    return <View style={styles.indicator} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        height: 250,
        // backgroundColor:'yellow',
        paddingBottom: 30,
        paddingTop: 10,
    },
    card: {
        width: width - 10,
        height: '100%',
        marginHorizontal: 5,
        borderRadius: 5,
    },
    indicatorConatiner: {
        alignSelf: 'center',
        // backgroundColor:'green', 
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
    },
    indicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#00000044',
        marginHorizontal: 5,
    },
    activeIndicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginHorizontal: 5,
    },

});