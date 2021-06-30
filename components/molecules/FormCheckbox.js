import React from "react";
import { StyleSheet, View } from "react-native";

import DefaultCheckbox from "../atoms/DefaultCheckbox";
import DefaultText from "../atoms/DefaultText";

const FormCheckbox = ({
  onSetCheckboxValue,
  children,
  value = undefined,
  variant = "1",
  style,
  width = "100%",
}) => {
  return (
    <View style={{ ...style, width }}>
      <View style={styles.container}>
        {variant === "2" && (
          <DefaultText variant="pr1-1">{children}</DefaultText>
        )}
        <View style={styles.checkbox}>
          <DefaultCheckbox value={value} onCheckboxValue={onSetCheckboxValue} />
        </View>
        {variant === "1" && <DefaultText variant="pl1">{children}</DefaultText>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  checkbox: {
    marginRight: 15,
  },
});

export default FormCheckbox;
