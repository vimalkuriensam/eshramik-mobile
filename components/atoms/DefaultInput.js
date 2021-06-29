import React from "react";
import { StyleSheet, TextInput } from "react-native";

import validator from "validator";
import { Shade } from "../../static/Colors";

const DefaultInput = ({
  type = "text",
  variant = "primary",
  value,
  style,
  onTextChange,
  refCallback,
  ...rest
}) => {
  const onHandleTextChange = (text) => {
    switch (type) {
      case "email":
        if (!validator.isEmail(text))
          return onTextChange({
            target: {
              value: text,
              error: "Invalid Email. Please provide the correct email.",
            },
          });
        return onTextChange({ target: { value: text, error: undefined } });
      case "number":
        if (!text || validator.isNumeric(text))
          return onTextChange({ target: { value: text, error: undefined } });
        return onTextChange({
          target: { value, error: "Invalid number. Please provide numbers" },
        });
    }
    onTextChange({ target: { value: text, error: undefined } });
  };
  return (
    <TextInput
      style={{ ...style, ...styles[variant] }}
      value={value}
      ref={refCallback}
      {...rest}
      onChangeText={onHandleTextChange}
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
  secondary: {
    backgroundColor: "#ebebeb",
    height: 67,
    width: 64,
    borderRadius: 10,
    paddingHorizontal: 8,
    textAlign: "center",
    fontSize: 30,
    color: Shade.tertiary,
  },
});

export default DefaultInput;
