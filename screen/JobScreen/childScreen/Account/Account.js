import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Shade } from "../../../../static/Colors";

const Account = () => {
  return (
    <View style={styles.center}>
      <StatusBar
        currentHeight={"44"}
        backgroundColor={Shade.primary}
        style="light"
      />
      <Text>Account Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Account;
