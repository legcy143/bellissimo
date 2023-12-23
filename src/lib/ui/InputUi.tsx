import React from 'react';
import { View, TextInput, StyleSheet, Image, StyleProp, ViewStyle, ImageStyle, TextStyle, TextInputProps } from 'react-native';

interface InputUiProps extends TextInputProps {
  startIcon?: string;
  endIcon?: string;
  mode?: 'outlined' | 'flat';
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
}

const InputUi: React.FC<InputUiProps> = ({
  startIcon,
  endIcon,
  mode = 'outlined',
  containerStyle,
  inputStyle,
  iconStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle, mode === 'outlined' && styles.outlinedContainer, mode === 'flat' && styles.flatContainer]}>
      {startIcon && <Image source={{ uri: startIcon }} style={[styles.icon, iconStyle]} />}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholderTextColor={"gray"}
        {...props}
      />
      {endIcon && <Image source={{ uri: endIcon }} style={[styles.icon, iconStyle]} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 8,
    color:"black",
    fontSize:17,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
  outlinedContainer: {
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 4,
  },
  flatContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#2196F3',
  },
});

export default InputUi;
