import { TouchableOpacity, Text,StyleSheet, StyleProp, ViewStyle, GestureResponderEvent, } from "react-native";
import React from "react";

interface CustomButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
}

const customButton = () => {
  return (
    <TouchableOpacity>t
      <Text>customButton</Text>
    </TouchableOpacity>
  )
}

export default customButton

const styles = StyleSheet.create({})