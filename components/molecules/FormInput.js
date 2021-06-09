import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../../static/Colors";
import DefaultText from "../atoms/DefaultText";
import Title from "../atoms/Title";

const FormInput = ({ variant, label, onInputChange, ...rest }) => {
  const getLabel = () => {
    switch (variant) {
      case "primary":
        return <Title variant="pSecondaryBlue">{label}</Title>;
      case "secondary":
        return <DefaultText variant="pn2Black">{label}</DefaultText>;
      default:
        return <DefaultText variant="pn2Black">{label}</DefaultText>;
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
