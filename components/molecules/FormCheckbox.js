import React from "react";
import { StyleSheet, View } from "react-native";
import { textCapitalize } from "../../static";
import DefaultCheckbox from "../atoms/DefaultCheckbox";
import DefaultText from "../atoms/DefaultText";

const FormCheckbox = ({ onSetCheckboxValue, label, style, width = "100%" }) => {
  return (
    <View style={{ ...style, width }}>
      <View style={styles.container}>
        <DefaultText variant="pn2Black">{textCapitalize(label)}</DefaultText>
        <DefaultCheckbox onCheckboxValue={onSetCheckboxValue} />
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
});

export default FormCheckbox;
