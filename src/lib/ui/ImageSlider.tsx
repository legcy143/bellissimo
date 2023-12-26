import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import { theme } from '../../contants/Theme';

const { width } = Dimensions.get('window');

interface ImageSliderProps {
    imgArr: any[];
    isLoop?: boolean;
    loopTimer?: number;
}

export default function ImageSlider({ imgArr = [], isLoop = false, loopTimer = 2000 }: ImageSliderProps) {
    const scrollValue = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef<ScrollView>(null);

    const translateX = scrollValue.interpolate({
        inputRange: [0, width],
        outputRange: [0, 20],
    });

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        let interval: any;
        if (isLoop) {
            interval = setInterval(() => {
                const nextPage = (currentPage + 1) % imgArr.length;
                scrollViewRef.current?.scrollTo({ x: nextPage * width, animated: true });
                setCurrentPage(nextPage);
            }, loopTimer);
        }
        return () => {
            clearInterval(interval);
        };
    }, [currentPage, imgArr.length]);

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
                    { useNativeDriver: false },
                )}>
                {imgArr.map((x, i) => (
                    <View style={[styles.card]} key={x._id}>
                        <Image
                            source={x.img}
                            style={{
                                width: '90%',
                                height: '90%',
                                resizeMode: 'cover',
                                borderRadius: 10,
                            }}
                        />
                    </View>
                ))}
            </ScrollView>
            <View style={styles.indicatorConatiner} pointerEvents="none">
                {imgArr.map((x, i) => (
                    <Indicator key={x._id} />
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
        paddingBottom: 30,
        paddingTop: 10,
    },
    card: {
        width: width - 20,
        height: '100%',
        marginHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    indicatorConatiner: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
    },
    indicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#00000000',
        borderWidth: 1,
        // borderColor: theme.gray,
        borderColor:"#00000050",
        marginHorizontal: 5,
    },
    activeIndicator: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: "#00000050",
        marginHorizontal: 5,
    },
});
