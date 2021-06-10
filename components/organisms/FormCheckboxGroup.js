import React from "react";
import { StyleSheet, View } from "react-native";
import Title from "../atoms/Title";

const FormCheckboxGroup = ({
  variant = "primaryHorizontal",
  label = "Label Text",
  children,
  width = "35%",
}) => {
  return (
    <View style={{ ...styles.container, ...styles[variant] }}>
      <Title variant="pSecondaryBlue" style={styles.title}>{label}</Title>
      <View
        style={{
          ...(variant === "secondaryHorizontal"
            ? styles["secondaryHorizontalChild"]
            : styles[variant]),
          width,
        }}
      >
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  title: {
      marginRight: 10
  },
  primaryHorizontal: {
    flexDirection: "row",
    alignItems: "center",
  },
  secondaryHorizontal: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  secondaryHorizontalChild: {
    flexDirection: "row",
    alignItems: "center",
  },
  secondaryVertical: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export default FormCheckboxGroup;
