import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './src/navigation/RootNavigation';
import Toast from 'react-native-toast-message';
import { Text } from 'react-native';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
      <Toast />
    </>
  );
}