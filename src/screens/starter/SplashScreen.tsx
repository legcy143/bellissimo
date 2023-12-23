import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonUi from '../../lib/ui/ButtonUi'

const SplashScreen = ({ navigation }: any) => {
    return (
        <View>
            <ButtonUi label='home' onPress={() => {
                navigation.navigate("BottomNavigation")
            }} />
            <Text>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})