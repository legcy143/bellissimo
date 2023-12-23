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

export default SplashScreen;

const styles = StyleSheet.create({});
