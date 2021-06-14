import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../../static/Colors";

const DefaultText = ({
  children,
  style,
  variant,
  color = Colors.blackMain,
}) => (
  <Text style={{ color, ...styles.text, ...styles[variant], ...style }}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {},
  pn1Black: {
    fontFamily: "proximaNova-Regular",
    fontSize: 20.5,
  },
  pn1White: {
    fontFamily: "proximaNova-Regular",
    fontSize: 20.5,
    color: Colors.white,
  },
  pn1Blue: {
    fontFamily: "proximaNova-Regular",
    fontSize: 20.5,
    color: Colors.turquoise,
  },
  pn2Grey: {
    fontFamily: "proximaNova-Regular",
    fontSize: 19,
    color: Colors.greyDark,
  },
  pn2Black: {
    fontFamily: "proximaNova-Regular",
    fontSize: 19,
    color: Colors.blackMain,
  },
  pn2Blue: {
    fontFamily: "proximaNova-Regular",
    fontSize: 19,
    color: Colors.turquoise,
  },
  pn3Black: {
    fontFamily: "proximaNova-Regular",
    fontSize: 18.5,
    color: Colors.blackMain,
  },
  pn3Grey: {
    fontFamily: "proximaNova-Regular",
    fontSize: 18.5,
    color: Colors.greyMedium,
  },
  pn4Black: {
    fontFamily: "proximaNova-Regular",
    fontSize: 16,
    color: Colors.blackMain,
  },
  pn4White: {
    fontFamily: "proximaNova-Regular",
    fontSize: 16,
    color: Colors.white,
  },
  pn4Blue: {
    fontFamily: "proximaNova-Regular",
    fontSize: 16,
    color: Colors.turquoise,
  },
  pn5Black: {
    fontFamily: "proximaNova-Regular",
    fontSize: 13.5,
    color: Colors.blackMain,
  },
  pn5Grey: {
    fontFamily: "proximaNova-Regular",
    fontSize: 13.5,
    color: Colors.greyDark,
  },
  pn5Blue: {
    fontFamily: "proximaNova-Regular",
    fontSize: 13.5,
    color: Colors.turquoise,
  },
  mr1: {
    fontFamily: "montserrat-regular",
    fontSize: 11,
    color: Colors.white,
  },
});

export default DefaultText;
