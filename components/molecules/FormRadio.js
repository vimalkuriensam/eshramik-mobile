import React from "react";
import { StyleSheet, View } from "react-native";
import BodyTitle from "../atoms/BodyTitle";
import DefaultRadio from "../atoms/DefaultRadio";
import DefaultText from "../atoms/DefaultText";

const FormRadio = ({ label = "", variant, contents, ...rest }) => {
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
    <View style={styles.radioContainer}>
      <View style={styles.labelContainer}>{getLabel()}</View>
      <DefaultRadio contents={contents} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    marginVertical: 7,
  },
  radioContainer: {
    marginVertical: 10,
  },
});

export default FormRadio;
