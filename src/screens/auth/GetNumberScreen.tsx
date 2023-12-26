import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ButtonUi from '../../lib/ui/ButtonUi'
import TextUi from '../../lib/ui/TextUi'
import { FaIcons } from '../../lib/ui/IconsUi'

const GetNumberScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* <View style={{
        paddingVertical: 10
      }}>
        <FaIcons icon="arrow-left" onPress={() => {
          navigation.goBack()
        }} />
      </View> */}
      <TextUi mode='h2' style={{ fontSize: 27, marginVertical: 10 , textTransform:"capitalize" }}>Enter your mobile number to get otp</TextUi>
      <View style={[styles.Inputcontainer]}>
        <TextUi style={styles.label}>Mobile Number</TextUi>
        <TextUi style={styles.number}>+91</TextUi>
        <TextInput
          style={[styles.input]}
          placeholder='10 Digit Mobile Number'
          placeholderTextColor={"gray"}
        />
      </View>
      <ButtonUi label='Get OTP' onPress={() => {
          navigation.navigate("GetOtp")
        }} />
      <View style={[styles.center, {
        gap: 5,
        flexWrap: "wrap",
        marginTop:"auto"
      }]}>
        <TextUi mode="p3" style={{ fontSize: 14 }}>By clicking i accept</TextUi>
        <TouchableOpacity>
          <TextUi mode='p1' style={{ fontSize: 15 }}>
            the terms
          </TextUi>
        </TouchableOpacity>
        <TextUi mode="p3" style={{ fontSize: 14 }}>and</TextUi>
        <TouchableOpacity>
          <TextUi mode='p1' style={{ fontSize: 15 }}>
            privacy policy
          </TextUi>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default GetNumberScreen

const styles = StyleSheet.create({
  center: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 15,
    // alignItems: "center",
    // justifyContent: "center",
    gap: 15,
  },
  Inputcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 2,
    // backgroundColor: '#E5E7EB',
    position: "relative",
  },
  number: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 1,
    paddingHorizontal:10,
    fontSize: 17,
    fontWeight: "500",
    borderRightWidth: 2,
    borderColor: '#00000020',
    color: "#00000090"
  },
  label: {
    top: -15,
    left: 15,
    position: "absolute",
    backgroundColor: "white",
    padding: 5,
    paddingLeft:7,
    fontSize: 14,
    color: "gray"
    // display: "none"
  },
  input: {
    flex: 1,
    color: "black",
    fontSize: 17,
    marginLeft:3
  }
})


