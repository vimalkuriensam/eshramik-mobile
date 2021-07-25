import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Saved = () => {
  return (
    <View style={styles.center}>
      <Text>Saved Screen</Text>
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

export default Saved;
