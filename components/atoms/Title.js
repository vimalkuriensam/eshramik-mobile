import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../../static/Colors";

const Title = ({ children, style, variant }) => (
  <Text style={{ ...styles.title, ...styles[variant], ...style }}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  title: {},
  pPrimary: {
    fontFamily: "proximaA-bold",
    fontSize: 26,
  },
  pSecondaryBlue: {
    fontFamily: "proximaA-bold",
    color: Colors.turquoise,
    fontSize: 18.5,
  },
  pSecondaryWhite: {
    fontFamily: "proximaA-bold",
    color: Colors.white,
    fontSize: 18.5,
  },
  pTertiary: {
    fontFamily: "proximaA-bold",
    color: Colors.blackMain,
    fontSize: 19,
  },
  mPrimary: {
    fontFamily: "montserrat-bold",
    color: Colors.white,
    fontSize: 19,
  },
});

export default Title;
