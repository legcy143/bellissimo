import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const PlaceOrderScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ProgressSteps>
        <ProgressStep label="order detail" nextBtnTextStyle={{ display: "none" }}>
          <View style={{ alignItems: 'center' }}>
            <Text>This is the content within step 1!</Text>
          </View>
        </ProgressStep>
        <ProgressStep label="addres">
          <View style={{ alignItems: 'center' }}>
            <Text>This is the content within step 2!</Text>
          </View>
        </ProgressStep>
        <ProgressStep label="payment">
          <View style={{ alignItems: 'center' }}>
            <Text>This is the content within step 3!</Text>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  )
}

export default PlaceOrderScreen

const styles = StyleSheet.create({})