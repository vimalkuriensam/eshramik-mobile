import React from "react";
import { StyleSheet, Text } from "react-native";
import { Shade } from "../../static/Colors";

const BodyTitle = ({
  variant = "primaryDark",
  style,
  children,
}) => {
  return (
    <Text style={{ ...style, ...styles.default, ...styles[variant] }}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    color: Shade.greyDark1,
    fontSize: 17,
    fontFamily: "poppins-regular",
  },
  primaryLight: {
    color: Shade.white,
  },
  primaryDark: {
    color: Shade.tertiary,
  },
  secondary: {
    fontFamily: "poppins-medium",
  },
  tertiary: {
    fontFamily: "montserrat-medium",
    color: Shade.greyDark2,
  },
});

export default BodyTitle;
