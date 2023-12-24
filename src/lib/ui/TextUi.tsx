import { StyleSheet, Text, TextProps, TextStyle, View } from 'react-native'
import React from 'react'

interface TextUiProps extends TextProps {
  mode?: 'default' | 'h1' | 'h2' | 'p1' | 'p2' | 'p3' | 'sm1' | 'sm2';
  children: any;
  style?: any;
}
const TextUi = ({ style, mode = "default", children, ...props }: TextUiProps) => {
  const textStyles: TextStyle[] = [styles.text, modes[mode], style];
  return (
    <Text {...props} style={textStyles}>{children}</Text>
  )
}


const modes = {
  default: {},
  h1: {
    fontWeight: "bold",
    fontSize: 50
  },
  h2: {
    fontWeight: "700",
    fontSize: 40
  },
  p1: {
    fontWeight: "500",
    fontSize: 20
  },
  p2: {
    fontWeight: "500",
    fontSize: 17,
  },
  p3: {
    fontWeight: "400",
    fontSize: 17
  },
  sm1: {
    fontWeight: "700",
    fontSize: 15
  },
  sm2: {
    fontWeight: "400",
    fontSize: 13
  },
}


const styles = StyleSheet.create({
  text: {
    color: "#363636",
  }
})

export default TextUi