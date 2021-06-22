import React from "react";
import { StyleSheet, View } from "react-native";
import { textCapitalize } from "../../static";
import DefaultCheckbox from "../atoms/DefaultCheckbox";
import DefaultText from "../atoms/DefaultText";

const FormCheckbox = ({
  onSetCheckboxValue,
  label,
  value = undefined,
  style,
  width = "100%",
}) => {
  return (
    <View style={{ ...style, width }}>
      <View style={styles.container}>
        <View style={styles.checkbox}>
          <DefaultCheckbox value={value} onCheckboxValue={onSetCheckboxValue} />
        </View>
        <DefaultText variant="pn2Black">{textCapitalize(label)}</DefaultText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkbox: {
    marginRight: 15,
  },
});

export default FormCheckbox;
