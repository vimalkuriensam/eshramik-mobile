import React from "react";
import { StyleSheet, TouchableNativeFeedback, View } from "react-native";
import { Colors } from "../../static/Colors";
import DefaultText from "./DefaultText";
import Title from "./Title";

const DefaultButton = ({ title, onButtonPress, variant, align = "center" }) => {
  return (
    <TouchableNativeFeedback onPress={onButtonPress}>
      <View
        style={{
          ...styles.button,
          ...styles[variant],
          alignSelf: align,
        }}
      >
        {variant.includes("tertiary") ? (
          <DefaultText
            style={{ fontSize: variant === "tertiarySmall" ? 13.5 : 21 }}
            variant="pn1White"
          >
            {title}
          </DefaultText>
        ) : (
          <Title variant="pSecondaryWhite">{title}</Title>
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: Colors.primary,
    width: 112,
    height: 50,
    borderRadius: 10,
  },
  secondarySmall: {
    backgroundColor: Colors.primary,
    width: 173,
    height: 70,
    borderRadius: 10,
  },
  secondaryLarge: {
    backgroundColor: Colors.primary,
    width: 290,
    height: 70,
    borderRadius: 10,
  },
  tertiaryGreen: {
    backgroundColor: Colors.green,
    width: 67,
    height: 25,
    borderRadius: 5,
  },
  tertiaryBlue: {
    backgroundColor: Colors.turquoise,
    width: 102,
    height: 58,
    borderRadius: 5,
  },
});

export default DefaultButton;
