import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FaIcons } from './IconsUi';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

export const TitleNav = ({ style, pagetitle = "group" }: any) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.container, style]}>
            <View style={[styles.center, { gap: 15 }]}>
                <FaIcons icon="arrow-left" size={25} onPress={() => {
                    navigation.goBack()
                }} />
                <Text style={styles.logo}>{pagetitle}</Text>
            </View>
            <View style={[styles.center, { gap: 15 }]}>
                <FaIcons icon="bell" size={25} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    center: {
        flexDirection: "row",
        alignItems: "center",
    },
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBlockColor: "#00000010",
        height: 60,
        paddingHorizontal: 15,
        // padding: 18,
    },
    logo: {
        color: "black",
        fontWeight: '600',
        fontSize: 20,
        textTransform: "capitalize"
    }

});

export default NavbarUi;
