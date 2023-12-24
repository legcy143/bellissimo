import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextUi from '../../lib/ui/TextUi'
import ButtonUi from '../../lib/ui/ButtonUi'

const GetOtpScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 10 }}>
      <ButtonUi label='verify' onPress={() => {
        navigation.navigate("BottomNavigation")
      }} />
    </View>
  )
}

export default GetOtpScreen

const styles = StyleSheet.create({})