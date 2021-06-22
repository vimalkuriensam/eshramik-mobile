import React from "react";
import { StyleSheet, TextInput } from "react-native";

const DefaultInput = ({
  type = "text",
  variant = "primary",
  value,
  style,
  ...rest
}) => {
  const onHandleTextChange = (text) => {
    console.log(text);
  };
  return (
    <TextInput
      style={{...style, ...styles.primary}}
      {...rest}
      onTextInput={onHandleTextChange}
    />
  );
};

const styles = StyleSheet.create({
  primary: {
    fontSize: 16,
    padding: 10,
    backgroundColor: "#ebebeb",
    height: 44,
  },
});

export default DefaultInput;
