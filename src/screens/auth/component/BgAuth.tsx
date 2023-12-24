import React, { useEffect, useRef, useState } from 'react'
import {
    Animated,
    Button,
    Dimensions,
    LayoutAnimation,
    Platform,
    StyleSheet,
    UIManager,
    View,
} from 'react-native';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}
const { width } = Dimensions.get('window');
const boxWidth = 100;
let tl = (t: any, l: any) => { return { left: l, top: t } }
let rb = (r: any, b: any) => { return { right: r, bottom: b } }

const BgAuth = () => {

    return (
        <View style={styles.container}>
            <Animated.Image
                style={[styles.imgStyle, tl("1%", "1%")]}
                source={require("../../../assets/Products/4.jpeg")} />
            <Animated.Image
                style={[styles.imgStyle, tl('1%', '60%')]}
                source={require("../../../assets/Products/5.jpeg")} />
            <Animated.Image
                style={[styles.imgStyle, tl('15%', '30%')]}
                source={require("../../../assets/Products/7.jpeg")} />
            <Animated.Image
                style={[styles.imgStyle,  tl('30%', '7%')]}
                source={require("../../../assets/Products/6.jpeg")} />
            <Animated.Image
                style={[styles.imgStyle,  tl('30%', '71%')]}
                source={require("../../../assets/Products/6.jpeg")} />
            <Animated.Image
                style={[styles.imgStyle, tl('45%', '55%')]}
                source={require("../../../assets/Products/9.jpeg")} />
            <Animated.Image
                style={[styles.imgStyle, tl('55%', '10%')]}
                source={require("../../../assets/Products/7.jpeg")} />
            <Animated.Image
                style={[styles.imgStyle, tl('65%', '50%')]}
                source={require("../../../assets/Products/8.jpeg")} />
            <Animated.Image
                style={[styles.imgStyle, tl('75%', '0%')]}
                source={require("../../../assets/Products/9.jpeg")} />
            <Animated.Image
                style={[styles.imgStyle, tl('85%', '70%')]}
                source={require("../../../assets/Products/1.jpeg")} />
            <Animated.Image
                style={[styles.imgStyle, tl('95%', '0%')]}
                source={require("../../../assets/Products/1.jpeg")} />
          
        </View>
    )
}

export default BgAuth

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        opacity: 0.8,
        overflow: "hidden"
    },
    imgStyle: {
        width: 90,
        height: 90,
        objectFit: "contain",
        position: "absolute",
    }
})