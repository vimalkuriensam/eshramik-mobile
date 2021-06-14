import React from "react";
import { StyleSheet, Text } from "react-native";
import { Shade } from "../../static/Colors";

const BodyTitle = ({
  variant = "primaryDark",
  content = "default content",
  style,
}) => {
  return (
    <Text style={{ ...style, ...styles.default, ...styles[variant] }}>
      {content}
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
    fontSize: 16,
  },
  tertiary: {
    fontFamily: "montserrat-medium",
    color: Shade.greyDark2,
  },
});

export default BodyTitle;
