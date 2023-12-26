import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImageSlider from '../../../lib/ui/ImageSlider';
import { Header, ViewMoreOption, ProductCard, SmallSlider, AddresHeader } from './component/HomeComponent';
import { Products } from '../../../assets/Products';

const HomeScreen = () => {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <ScrollView stickyHeaderIndices={[0]}>
                <Header />
                <AddresHeader />
                <ImageSlider imgArr={Products} />
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        height: 40 ,
                        paddingHorizontal:10,
                    }}
                    >
                    <SmallSlider message={'price slash alert'} />
                    <SmallSlider message={'To deals'} />
                    <SmallSlider message={'trending in market'} />
                    <SmallSlider message={'welfare'} />
                </ScrollView>
                <ShowProduct data={data} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const ShowProduct = ({ data = [] }: any) => {
    return (
        <View >
            <ViewMoreOption />
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal
                contentContainerStyle={{
                    paddingHorizontal:15,
                    paddingVertical:10,
                    gap: 10
                }}
            >
                {data.map(e => (
                    <ProductCard key={e} style={{
                        width: 230,
                        flex: 0,
                    }} />
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap",
    }
});