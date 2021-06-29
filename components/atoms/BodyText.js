import React from "react";
import { Text, StyleSheet } from "react-native";
import { Shade } from "../../static/Colors";

const BodyText = ({ variant, style, children, color }) => (
  <Text style={{ ...style, ...styles.default, ...styles[variant], color }}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  default: {
    color: Shade.greyDark1,
    fontSize: 16,
    fontFamily: "poppins-light",
  },
  primaryGrey: {
    fontSize: 14,
    fontFamily: "poppins-regular",
  },
  primaryBlue: {
    fontSize: 14,
    fontFamily: "poppins-regular",
    color: Shade.tertiary,
  },
  secondaryDark1: {
    color: Shade.greyLight1,
  },
  secondaryDark2: {},
  secondaryDark3: {
    fontSize: 17,
  },
  secondaryLight1: {
    fontSize: 17,
    color: Shade.white,
  },
  tertiaryLight: {
    color: Shade.greyLight2,
  },
});

export default BodyText;
