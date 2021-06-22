import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DefaultButton from "../../components/atoms/DefaultButton";
import DefaultInput from "../../components/atoms/DefaultInput";

const AuthScreen = () => {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <DefaultInput style={styles.loginInputStyle} placeholder="Name" />
      <DefaultInput style={styles.loginInputStyle} placeholder="Email Id" />
      <DefaultInput
        style={styles.loginInputStyle}
        placeholder="Mobile number"
      />
      <DefaultButton variant="primary" title="Sign Up" />
    </View>
  );
};

const styles = StyleSheet.create({
  loginInputStyle: {
    marginVertical: 13.5,
  },
});

export default AuthScreen;
