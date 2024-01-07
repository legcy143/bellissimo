import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextUi from '../../../../lib/ui/TextUi'
import { theme } from '../../../../contants/Theme'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from "react-native-vector-icons/FontAwesome"

export const ProfileHeader = (() => {
    const navigation: any = useNavigation()
    return (
        <View style={{
            marginTop: 10,
            paddingTop: 0,
            padding: 20,
            backgroundColor: "white"
        }}>
            <TextUi mode='p2' style={{
                textTransform: "capitalize",
                fontSize: 20,
                marginVertical: 10,
            }}>username goes heres</TextUi>
            <View style={[styles.center, { gap: 10, paddingVertical: 10 }]}>
                <TouchableOpacity style={[styles.P1Card]} onPress={() => { navigation.navigate("MyOrders") }}>
                    <FontAwesome name='cubes' size={25} color={theme.primaryColor} />
                    <TextUi mode='sm1'>my Orders</TextUi>
                </TouchableOpacity>

                {/* support-agent */}
                <TouchableOpacity style={[styles.P1Card]} onPress={()=>{
                    navigation.navigate("HelpCenter")
                }}>
                    <MaterialIcons name='support-agent' size={25} color={theme.primaryColor} />
                    <TextUi mode='sm1'>Help Center</TextUi>
                </TouchableOpacity>
            </View>
        </View>
    )
})

export const MoreOptionCard = ({ title = "title", icon = "settings" , onPress}:any) => {
 
    return (
      <TouchableOpacity style={[
        styles.center,
        {
          borderRadius: 6,
          padding: 15,
          width: "100%",
          gap: 5,
        }
      ]}
      onPress={onPress}>
        <MaterialIcons name={icon} size={25} color={theme.primaryColor} />
        <TextUi mode='p3' style={{
          textTransform: "capitalize"
        }}>{title}</TextUi>
        <MaterialIcons style={{ marginLeft: "auto" }} name='navigate-next' size={25} color={theme.primaryColor} />
      </TouchableOpacity>
    )
  }

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