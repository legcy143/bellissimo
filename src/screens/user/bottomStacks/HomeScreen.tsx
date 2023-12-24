import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageSlider from '../../../lib/ui/ImageSlider';
import { Header, ViewMoreOption, ProductCard, SmallSlider, AddresHeader } from './component/HomeComponent';
import { Products } from '../../../assets/Products';

const HomeScreen = () => {
    console.log(Products)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView  stickyHeaderIndices={[0]}>
                <Header />
                <AddresHeader />
                <ImageSlider imgArr={Products}/>
                <ScrollView
                    style={{ height: 40 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <SmallSlider message={'price slash alert'} />
                    <SmallSlider message={'To deals'} />
                    <SmallSlider message={'trending in market'} />
                    <SmallSlider message={'welfare'} />
                </ScrollView>
                <ViewMoreOption />
                <View style={[styles.center, { gap: 10 }]}>
                    <ProductCard style={{
                        width: "45%",
                        flex:0,
                    }} />
                    <ProductCard style={{
                        width: "45%",
                        flex:0,
                    }} />
                    <ProductCard style={{
                        width: "45%",
                        flex:0,
                    }} />
                    <ProductCard style={{
                        width: "45%",
                        flex:0,
                    }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    center: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap",
    }
});