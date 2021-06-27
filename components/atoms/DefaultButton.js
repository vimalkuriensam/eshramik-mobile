import React from "react";
import { StyleSheet, TouchableNativeFeedback, View, Text } from "react-native";
import { Colors, Shade } from "../../static/Colors";
import DefaultText from "./DefaultText";
import Title from "./Title";

const DefaultButton = ({ title, onButtonPress, variant, align = "center" }) => {
  return (
    <TouchableNativeFeedback onPress={onButtonPress} style={{marginHorizontal: 16}}>
      <View
        style={{
          ...styles.button,
          ...styles[variant],
          alignSelf: align,
        }}
      >
        <Text style={styles[`${variant}Text`]}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: Shade.secondary,
    width: "100%",
    height: 44,
    borderRadius: 10,
    paddingVertical: 10,
  },
  primaryText: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "poppins-regular"
    
  },
  secondary: {},
});

export default DefaultButton;
