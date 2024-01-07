import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OrderPricing, ProductDetail, ShipingDetail } from './component/OrderDetailUi'
import TextUi from '../../../lib/ui/TextUi'

const OrderDetailScreen = () => {
  return (
    <View>
      <TextUi style={{
        opacity: 0.7, backgroundColor: "white", padding: 12,
        marginVertical:1
      }}>Order ID : 5946843860395</TextUi>
      <ProductDetail />
      {/* product tracking goes here */}
      <ShipingDetail />
      <OrderPricing />
    </View>
  )
}

export default OrderDetailScreen

const styles = StyleSheet.create({})