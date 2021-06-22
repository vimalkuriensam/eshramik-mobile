import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors, Shade } from "../../static/Colors";

const DefaultText = ({ children, style, variant, color = Shade.greyDark1 }) => (
  <Text style={{ color, ...styles[variant], ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
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
  // mr1: {
  //   fontFamily: "montserrat-regular",
  //   fontSize: 11,
  //   color: Colors.white,
  // },

  pl1: {
    fontFamily: "poppins-light",
    fontSize: 17,
  },
  pl2: {
    fontFamily: "poppins-light",
    fontSize: 16,
  },
  "pl3-1": {
    fontFamily: "poppins-light",
    fontSize: 12,
  },
  "pl3-2": {
    fontFamily: "poppins-light",
    fontSize: 12,
    color: Shade.tertiary,
  },
  pl4: {
    fontFamily: "poppins-light",
    fontSize: 10,
    color: Shade.tertiary,
  },
  pr1: {
    fontFamily: "poppins-regular",
    fontSize: 16,
  },
  "pr2-1": {
    fontFamily: "poppins-regular",
    fontSize: 14,
  },
  "pr2-2": {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: Shade.tertiary,
  },
  pr3: {
    fontFamily: "poppins-regular",
    fontSize: 13,
  },
  pr4: {
    fontFamily: "poppins-regular",
    fontSize: 10,
  },
  mr1: {
    fontFamily: "montserrat-regular",
    fontSize: 15,
    color: Shade.primary,
  },
});

export default DefaultText;
