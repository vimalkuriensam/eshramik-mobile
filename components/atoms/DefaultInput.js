import React from "react";
import { StyleSheet, TextInput } from "react-native";

import validator from "validator";

const DefaultInput = ({
  type = "text",
  variant = "primary",
  value,
  style,
  onTextChange,
  ...rest
}) => {
  const onHandleTextChange = (text) => {
    switch (type) {
      case "email":
        if (!validator.isEmail(text))
          return onTextChange({
            target: { value: text, error: "Invalid Email. Please provide the correct email." },
          });
        return onTextChange({ target: { value: text, error: undefined } });
      case "number":
        if (!text || validator.isNumeric(text))
          return onTextChange({ target: { value: text, error: undefined } });
        return onTextChange({ target: { value, error: "Invalid number. Please provide numbers" }})
    }
    onTextChange({ target: { value: text, error: undefined } });
  };
  return (
    <TextInput
      style={{ ...style, ...styles.primary }}
      value={value}
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
});

export default DefaultInput;
