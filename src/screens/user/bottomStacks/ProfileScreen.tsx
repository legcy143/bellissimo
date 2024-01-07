import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextUi from '../../../lib/ui/TextUi'
import ButtonUi from '../../../lib/ui/ButtonUi'
import { MoreOptionCard, ProfileHeader } from './component/ProfileComponent'


const ProfileScreen = ({ navigation }: any) => {
  return (
    <ScrollView>
      <ProfileHeader />
      <View style={[styles.center, {
        flexDirection: "column",
        gap: 10,
        backgroundColor: "white",
        marginVertical: 10,
        padding: 10,
      }]}>
        <TextUi mode='p1' style={{
          width: "100%",
          paddingHorizontal: 10
        }}>Settings </TextUi>
        <MoreOptionCard title="Edit Profile" icon="edit" onPress={() => {
          navigation.navigate("EditProfile")
        }} />
        <MoreOptionCard title="saved addres" icon='edit-location-alt' onPress={() => {
          navigation.navigate("EditAddres")
        }} />
        {/* <MoreOptionCard title="contact us" icon='wechat' /> */}
        <ButtonUi mode='outlined' label="log Out" ButtonStyle={{
          paddingVertical: 10,
          width: "100%"
        }} />
      </View>
    </ScrollView>
  )
}




export default ProfileScreen
const styles = StyleSheet.create({
  center: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
})