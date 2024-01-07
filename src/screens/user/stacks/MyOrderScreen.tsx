import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextUi from '../../../lib/ui/TextUi'

const MyOrderScreen = ({ navigation }: any) => {
  return (
    <ScrollView>
      <View style={{ gap: 5 }}>
        <ProductCard onPress={() => {
          navigation.navigate("OrderDetail")
        }} />
        <ProductCard />
        <ProductCard />
      </View>
    </ScrollView>
  )
}

export default MyOrderScreen

const ProductCard = ({ onPress }: any) => {
  return (
    <TouchableOpacity style={{
      // borderWidth: 1,
      // borderColor: "#11111130",
      // borderRadius: 10,
      overflow: "hidden",
      backgroundColor: "white"
    }}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          gap: 20,

        }}>
        {/* left side */}
        <View  style={{ width: 100, height: 100}}>
          <Image
            source={require('../../../assets/Products/1.jpeg')}
            style={{ width: "100%", height: "100%", resizeMode: 'contain', }}
          />
        </View>
        {/* right side content */}
        <View style={{ flex: 1, gap: 4, justifyContent: "center" }}>
          {/* <TextUi mode='p1'>Delivered successfuly</TextUi> */}
          <TextUi mode='p3' >BELLISSIOMO ULTRA FINE </TextUi>
          <TextUi mode='p1'>$45</TextUi>
          <TextUi mode='sm1' style={{
            fontWeight: '400',
          }}>Deliverd on wed dec 2</TextUi>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})