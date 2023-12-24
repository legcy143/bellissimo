import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import { theme } from '../../contants/Theme';

interface ButtonUiProps {
  label: string;
  onPress?: () => void;
  mode?: 'contained' | 'outlined' | 'text' | 'elevated' | 'containedTonal';
  ButtonStyle?: ViewStyle | any;
  textStyle?: TextStyle | any;
}

const ButtonUi: React.FC<ButtonUiProps> = ({ label, mode = 'contained', ButtonStyle, textStyle, ...props }) => {
  const containerStyles: ViewStyle[] = [styles.button, modes[mode]?.container, ButtonStyle];
  const textStyles: TextStyle[] = [styles.text, modes[mode]?.text, textStyle];

  return (
    <TouchableOpacity activeOpacity={0.5} style={containerStyles} {...props}>
      <Text style={textStyles}>{label}</Text>
    </TouchableOpacity>
  );
};

const modes = {
  contained: {
    container: { backgroundColor: theme.primaryColor },
    text: { color: theme.secondryText },
  },
  outlined: {
    container: {},
    text: { color: theme.primaryColor },
  },
  text: {
    container: { borderColor: "transparent"},
    text: { color: theme.primaryColor },
  },
  elevated: {
    container: { backgroundColor: theme.primaryColor, elevation: 2 },
    text: { color: theme.secondryText },
  },
  containedTonal: {
    container: { backgroundColor: '#4CAF50' },
    text: { color: '#FFFFFF' },
  },
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 7,
    paddingVertical: 13,
    paddingHorizontal: 5,
    minWidth: 100,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.primaryColor 
  },
  text: {
    fontSize: 17,
    textTransform: "capitalize",
    fontWeight: 'bold',
  },
});

export default ButtonUi;
