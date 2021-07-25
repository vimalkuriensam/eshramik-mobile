import React from "react";
import { StyleSheet, TouchableNativeFeedback, View, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { Shade } from "../../static/Colors";

const DefaultButton = ({
  loader = false,
  title,
  icon = undefined,
  onButtonPress,
  variant,
  style,
  align = "center",
}) => {
  return (
    <TouchableNativeFeedback
      onPress={onButtonPress}
      style={{ marginHorizontal: 16 }}
    >
      <View
        style={{
          ...styles.button,
          ...styles[variant],
          ...style,
          alignSelf: align,
        }}
      >
        {!loader ? (
          <View style={styles.buttonContent}>
            {icon ? <Ionicons name={icon} size={27} /> : null}
            <Text style={styles[`${variant}Text`]}>{title}</Text>
          </View>
        ) : (
          <ActivityIndicator size="small" color={Shade.white} />
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10.5,
    paddingHorizontal: 31,
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
    fontFamily: "poppins-regular",
  },
  secondary: {
    backgroundColor: Shade.white,
    borderColor: Shade.primary,
    borderWidth: 2,
    minWidth: 220,
    borderRadius: 10,
  },
  secondaryText: {
    color: Shade.greyDark1,
    fontSize: 20,
    marginLeft: 10,
  },
});

export default DefaultButton;
