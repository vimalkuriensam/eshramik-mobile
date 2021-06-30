import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../../static/Colors";
import BodyTitle from "../atoms/BodyTitle";
import DefaultText from "../atoms/DefaultText";
import Title from "../atoms/Title";

const FormInput = ({ variant, label, onInputChange, ...rest }) => {
  const getLabel = () => {
    switch (variant) {
      case "primary":
        return <BodyTitle variant="primary">{label}</BodyTitle>;
      case "secondary":
        return <DefaultText variant="pr1-1">{label}</DefaultText>;
      default:
        return <DefaultText variant="pr1-1">{label}</DefaultText>;
    }
  };
  return (
    <View>
      <View style={styles.labelContainer}>{getLabel()}</View>
      <View>
        <TextInput
          style={{ ...styles.input, height: variant === "primary" ? 32 : 54 }}
          onChangeText={onInputChange}
          {...rest}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    marginVertical: 7,
  },
  input: {
    backgroundColor: Colors.greyLight,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default FormInput;
