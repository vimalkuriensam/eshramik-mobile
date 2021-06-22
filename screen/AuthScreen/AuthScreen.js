import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";

import DefaultButton from "../../components/atoms/DefaultButton";
import DefaultInput from "../../components/atoms/DefaultInput";

const AuthScreen = () => {
  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/jobs-logo.png")} />
      </View>
      <DefaultInput style={styles.loginInputStyle} placeholder="Name" />
      <DefaultInput style={styles.loginInputStyle} placeholder="Email Id" />
      <DefaultInput
        style={styles.loginInputStyle}
        placeholder="Mobile number"
      />
      <DefaultButton variant="primary" title="Sign Up" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginInputStyle: {
    marginVertical: 13.5,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 66,
    marginBottom: 88,
  },
});

export default AuthScreen;
