import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextUi from '../../../lib/ui/TextUi'
import ButtonUi from '../../../lib/ui/ButtonUi'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { theme } from '../../../contants/Theme'

const ProfileScreen = () => {
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
        <MoreOptionCard title="Edit Profile" icon="edit"/>
        <MoreOptionCard title="saved addres" icon='edit-location-alt'/>
        <MoreOptionCard title="contact us" icon='wechat'/>
        <ButtonUi mode='outlined' label="log Out" ButtonStyle={{
          paddingVertical: 10,
          width: "100%"
        }} />
      </View>
    </ScrollView>
  )
}

const ProfileHeader = (() => (
  <View style={{
    marginTop:10,
    paddingTop:0,
    padding: 20,
    backgroundColor: "white"
  }}>
    <TextUi mode='p2' style={{
      textTransform: "capitalize",
      fontSize: 20,
      marginVertical: 10,
    }}>username goes heres</TextUi>
    <View style={[styles.center, { gap: 10, paddingVertical: 10 }]}>
      <TouchableOpacity style={[styles.P1Card]}>
        <FontAwesome name='cubes' size={25} color={theme.primaryColor} />
        <TextUi mode='sm1'>Orders</TextUi>
      </TouchableOpacity>

      {/* support-agent */}
      <TouchableOpacity style={[styles.P1Card]}>
        <MaterialIcons name='support-agent' size={25} color={theme.primaryColor} />
        <TextUi mode='sm1'>Help Center</TextUi>
      </TouchableOpacity>
    </View>
  </View>
))


const MoreOptionCard = ({ title = "title" , icon="settings" }) => {
  return (
    <TouchableOpacity style={[
      styles.center,
      {
        borderRadius: 6,
        padding: 15,
        width: "100%",
        gap: 5,
      }
    ]}>
      <MaterialIcons name={icon} size={25} color={theme.primaryColor} />
      <TextUi mode='p3' style={{
        textTransform: "capitalize"
      }}>{title}</TextUi>
      <MaterialIcons style={{ marginLeft: "auto" }} name='navigate-next' size={25} color={theme.primaryColor} />
    </TouchableOpacity>
  )
}
export default ProfileScreen
const styles = StyleSheet.create({
  center: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  P1Card: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#00000050",
    // borderColor: "red",
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 6,
  }
})