import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ButtonUi from '../../lib/ui/ButtonUi'
import TextUi from '../../lib/ui/TextUi'
import BgAuth from '../auth/component/BgAuth'

const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        const interval = setTimeout(() => {
            navigation.replace("GetNumber")
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <View style={[styles.container]}>
            {/* <BgAuth /> */}
            <Image
                style={{
                    width: 150,
                    height: 150,
                    objectFit: "contain"
                }}
                source={require('../../assets/logo_big.png')}
            />
            <TextUi mode='p1'>Bellissimo</TextUi>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        flex: 1
    }
})