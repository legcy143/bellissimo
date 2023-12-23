import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

interface ButtonUiProps {
  label: string;
  onPress?: () => void;
  mode?: 'contained' | 'outlined' | 'text' | 'elevated' | 'containedTonal';
  ButtonStyle?: ViewStyle | any;
  textStyle?: TextStyle | any;
}

const ButtonUi: React.FC<ButtonUiProps> = ({ label, mode = 'contained', ButtonStyle, textStyle, ...props }) => {
  const { primary, secondry , primaryText , secondryText}: any = useTheme()
  const containerStyles: ViewStyle[] = [styles.button, modes[mode]?.container, ButtonStyle];
  const textStyles: TextStyle[] = [styles.text, modes[mode]?.text, textStyle];

  return (
    <TouchableOpacity activeOpacity={0.8} style={containerStyles} {...props}>
      <Text style={textStyles}>{label}</Text>
    </TouchableOpacity>
  );
};

const modes = {
  contained: {
    container: { backgroundColor: '#2196F3' },
    text: { color: '#FFFFFF' },
  },
  outlined: {
    container: { borderWidth: 1, borderColor: '#2196F3' },
    text: { color: '#2196F3' },
  },
  text: {
    container: {},
    text: { color: '#2196F3' },
  },
  elevated: {
    container: { backgroundColor: '#2196F3', elevation: 2 },
    text: { color: '#FFFFFF' },
  },
  containedTonal: {
    container: { backgroundColor: '#4CAF50' },
    text: { color: '#FFFFFF' },
  },
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 12,
    minWidth: 100,
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    textTransform: "capitalize",
    fontWeight: 'bold',
  },
});

export default ButtonUi;
