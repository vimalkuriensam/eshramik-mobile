import React from "react";
import { StyleSheet, TouchableNativeFeedback, View, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { Shade } from "../../static/Colors";

const DefaultButton = ({
  loader = false,
  title,
  onButtonPress,
  variant,
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
          alignSelf: align,
        }}
      >
        {!loader ? (
          <Text style={styles[`${variant}Text`]}>{title}</Text>
        ) : (
          <ActivityIndicator size="small" color={Shade.white} />
        )}
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
    fontFamily: "poppins-regular",
  },
  secondary: {},
});

export default DefaultButton;
