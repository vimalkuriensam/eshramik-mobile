import React from "react";

import { View, Image, ScrollView, StyleSheet } from "react-native";
import DefaultButton from "../../../components/atoms/DefaultButton";
import DefaultInput from "../../../components/atoms/DefaultInput";
import DefaultText from "../../../components/atoms/DefaultText";
import FormCheckbox from "../../../components/molecules/FormCheckbox";

const Signup = () => {
  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <View style={styles.imageContainer}>
        <Image source={require("../../../assets/images/jobs-logo.png")} />
      </View>
      <DefaultInput style={styles.loginInputStyle} placeholder="Name" />
      <DefaultInput style={styles.loginInputStyle} placeholder="Email Id" />
      <DefaultInput
        style={styles.loginInputStyle}
        placeholder="Mobile number"
      />
      <FormCheckbox style={styles.termsContainer} width="90%">
        <DefaultText variant="pr2-1">
          By signing up, you agree to our
        </DefaultText>
        <DefaultText variant="pr2-2"> Terms of use </DefaultText>
        <DefaultText variant="pr2-1"> and </DefaultText>
        <DefaultText variant="pr2-2"> Privacy policies </DefaultText>
      </FormCheckbox>
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
  termsContainer: {
    marginTop: 13.5,
  },
});

export default Signup;
