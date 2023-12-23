import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputUi from '../../lib/ui/InputUi'
import ButtonUi from '../../lib/ui/ButtonUi'
import TextUi from '../../lib/ui/TextUi'
import BgAuth from './component/BgAuth'

const GetNumberScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <BgAuth />
      <Image
        style={[{
          width: 200,
          height: 200,
          objectFit: "contain",
          position: "absolute",
        }]}
        source={require('../../assets/logo_big.png')}
      />
      <View style={{
        width: '100%',
        padding: 25,
        alignItems: "center",
        gap: 10
      }}>
        <TextUi mode='p1' style={{ width: '100%' }}>Login to bellissimo</TextUi>
        <InputUi placeholder='Number' />
        <ButtonUi label='continue' ButtonStyle={{ width: "100%" }} onPress={() => {
          navigation.navigate("GetOtp")
        }} />
        <TextUi mode='sm2'>By Login you agree our terms and condition</TextUi>
      </View>
    </View>
  )
}

export default GetNumberScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
  }
})


