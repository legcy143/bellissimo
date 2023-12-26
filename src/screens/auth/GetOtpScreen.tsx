import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import TextUi from '../../lib/ui/TextUi'
import ButtonUi from '../../lib/ui/ButtonUi'
import { theme } from '../../contants/Theme'

const GetOtpScreen = ({ navigation }: any) => {

  return (
    <View style={{
      padding: 10,
      gap: 10
    }}>
      <View>
        <TextUi mode='p3' style={{ fontSize: 20 }}>enter Otp that we send on whatsapp number +9999999999  </TextUi>
      </View>
      <OtpComponent />
      <ButtonUi label='verify' onPress={() => {
        navigation.navigate("BottomNavigation")
      }} />
    </View>
  )
}



const OtpComponent = () => {
  const firstNum = useRef<any>(0);
  const secondNum = useRef<any>(0);
  const thirdNum = useRef<any>(0);
  const fourthNum = useRef<any>(0);
  const [Otp, setOtp] = useState<any>(['', '', '', '', ''])

  let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  const HandleChange = (val: string, inc: any, dec: any = "") => {
    val.replace(" ", "")
    if (num.includes(val)) {
      setOtp((e) => [...e, val])
    }
    else { dec }
    setOtp((e) => [...e].pop())
  }

  return (
    <View style={[styles.center, styles.otpContainer]}>
      <TextInput style={styles.optInput}
        ref={firstNum}
        keyboardType='number-pad'
        value={Otp[0]}
        onChangeText={(e) => { HandleChange(e, secondNum.current.focus(), "end") }}
      />
      <TextInput style={styles.optInput}
        ref={secondNum}
        keyboardType='number-pad'
        value={Otp[1]}
        onChangeText={(e) => { HandleChange(e, thirdNum.current.focus(), firstNum.current.focus()) }}
      />
      <TextInput style={styles.optInput}
        ref={thirdNum}
        keyboardType='number-pad'
        value={Otp[2]}
        onChangeText={(e) => { HandleChange(e, fourthNum.current.focus(), thirdNum.current.focus()) }}
      />
      <TextInput style={styles.optInput}
        ref={fourthNum}
        keyboardType='number-pad'
        value={Otp[3]}
        onChangeText={(e) => { HandleChange(e, "", thirdNum.current.focus()) }}
      />
      <TextInput style={styles.optInput}
        ref={fourthNum}
        keyboardType='number-pad'
        value={Otp[3]}
        onChangeText={(e) => { HandleChange(e, "", thirdNum.current.focus()) }}
      />
      <TextInput style={styles.optInput}
        ref={fourthNum}
        keyboardType='number-pad'
        value={Otp[3]}
        onChangeText={(e) => { HandleChange(e, "", thirdNum.current.focus()) }}
      />
    </View>
  )
}
export default GetOtpScreen

const styles = StyleSheet.create({
  center: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  otpContainer: {
    gap: 10,
  },
  optInput: {
    padding: 11,
    backgroundColor: "#00000010",
    borderWidth: 1,
    borderColor: "#00000020",
    borderRadius: 5,
    fontSize: 20,
    color: theme.primaryText,
    textAlign: 'center'
  }
})