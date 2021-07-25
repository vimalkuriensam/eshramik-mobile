import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Search = () => {
  return (
    <View style={styles.center}>
      <Text>Search Screen</Text>
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

export default Search;
