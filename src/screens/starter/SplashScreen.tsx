<<<<<<< HEAD
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextUi from '../../lib/ui/TextUi';
import {FaIcons} from '../../lib/ui/IconsUi';

const SplashScreen = () => {
  return (
    <View>
      <FaIcons icons="house" />
      <TextUi>splash only</TextUi>
    </View>
  );
};
=======
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
>>>>>>> 1c05cd0ad52f3822fe6c2ebbe87a91b2bc227b4d

export default SplashScreen;

const styles = StyleSheet.create({});
