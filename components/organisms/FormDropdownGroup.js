import React from "react";
import { StyleSheet, View } from "react-native";

import DefaultText from "../atoms/DefaultText";
import Dropdown from "../molecules/Dropdown";

const FormDropdownGroup = ({ title, onItemPress, ...rest }) => {
  return (
    <View style={styles.container}>
      <DefaultText variant="pr1-1">{title}</DefaultText>
      <Dropdown onItemPress {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default FormDropdownGroup;
