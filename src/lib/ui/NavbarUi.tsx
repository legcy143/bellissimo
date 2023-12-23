import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FaIcons } from './IconsUi';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { Chip } from 'react-native-paper';

const NavbarUi = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Fairyfunds</Text>
            <View style={[styles.center, { gap: 15 }]}>
                <FaIcons icon="bell" size={25} />
                <FaIcons icon="user" size={25} onPress={() => { navigation.push("Profile") }} />
            </View>
        </View>
    );
};

export const GroupNavbar = ({ navigation, style, pagetitle = "group" }: any) => {
    return (
        <View style={[styles.container, style]}>
            <View style={[styles.center, { gap: 10 }]}>
                <FaIcons icon="arrow-left" size={25} />
                <Image
                    style={{
                        width: 30,
                        height: 30,
                        objectFit: "cover",
                        borderRadius: 120
                    }}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text style={styles.logo} numberOfLines={1}>group name asdfajsdfkjlaskdjflkjasdfjaskdf</Text>
            </View>
            <View style={[styles.center, { gap: 15 }]}>
                <Chip icon="alpha-c-circle" onPress={() => console.log('Pressed')}>1000</Chip>
            </View>
        </View>
    )
}

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
