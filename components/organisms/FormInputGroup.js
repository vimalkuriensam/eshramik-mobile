import React from "react";
import { StyleSheet, View } from "react-native";
import FormInput from "../molecules/FormInput";

const FormInputGroup = ({ values = [], onInputChange }) => {
  return (
    <View style={styles.mainContainer}>
      {values.map((value, index) => (
        <View key={index} style={styles.inputContainer}>
          <FormInput
            variant={value.variant}
            onInputChange={onInputChange.bind(this, value.id)}
            label={value.label}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },
  inputContainer: {
    marginHorizontal: 14,
    marginVertical: 5,
  },
});

export default FormInputGroup;
