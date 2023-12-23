import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputUi from '../../lib/ui/InputUi'
import ButtonUi from '../../lib/ui/ButtonUi'
import TextUi from '../../lib/ui/TextUi'

const GetNumberScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={[{
          width: 150,
          height: 150,
          objectFit: "contain"
        }]}
        source={require('../../assets/logo_big.png')}
      />
      <TextUi mode='p1'>Login to bellissimo</TextUi>
      <InputUi placeholder='Number' />
      <ButtonUi label='continue' ButtonStyle={{
        width: '100%'
      }} />
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
    padding: 20,
    gap: 10,
  }
})