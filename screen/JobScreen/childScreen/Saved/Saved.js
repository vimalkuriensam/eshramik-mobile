import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomButton from "../../../../components/molecules/CustomButton";
import { Shade } from "../../../../static/Colors";

const Saved = () => {
  return (
    <View style={styles.center}>
      <StatusBar
        currentHeight={"44"}
        backgroundColor={Shade.primary}
        style="light"
      />
      <Text>Saved Screen</Text>
    </View>
  );
};

export const savedScreenOptions = ({ navigation }) => ({
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomButton}>
      <Item title="Cart" iconName="md-menu" />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Saved;
