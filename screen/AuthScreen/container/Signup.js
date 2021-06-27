import React, { useState } from "react";

import { Alert, View, Image, ScrollView, StyleSheet } from "react-native";
import DefaultButton from "../../../components/atoms/DefaultButton";
import DefaultInput from "../../../components/atoms/DefaultInput";
import DefaultText from "../../../components/atoms/DefaultText";
import FormCheckbox from "../../../components/molecules/FormCheckbox";

const Signup = ({ onSignupSubmit }) => {
  const [signupValue, setSignupValue] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [signupError, setSignupError] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const onHandleSignupValues = (type, e) => {
    const { value, error } = e.target;
    if (error) setSignupError((prevState) => ({ ...prevState, [type]: error }));
    setSignupValue((prevState) => ({ ...prevState, [type]: value }));
  };

  const onHandleSignupSubmit = () => {
    const errorMatch = Object.values(signupError).find((error) => !!error);
    if (errorMatch)
      Alert.alert("Error", errorMatch, [{ text: "OK", style: "cancel" }]);
    // onSignupSubmit(signupValue);
  };

  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <View style={styles.imageContainer}>
        <Image source={require("../../../assets/images/jobs-logo.png")} />
      </View>
      <DefaultInput
        onTextChange={onHandleSignupValues.bind(this, "name")}
        style={styles.loginInputStyle}
        placeholder="Name"
      />
      <DefaultInput
        onTextChange={onHandleSignupValues.bind(this, "email")}
        type="email"
        value={signupValue.email}
        style={styles.loginInputStyle}
        placeholder="Email Id"
        keyboardType="email-address"
      />
      <DefaultInput
        onTextChange={onHandleSignupValues.bind(this, "mobile")}
        style={styles.loginInputStyle}
        value={signupValue.mobile}
        type="number"
        placeholder="Mobile number"
        keyboardType="phone-pad"
      />
      <FormCheckbox style={styles.termsContainer} width="90%">
        <DefaultText variant="pr2-1">
          By signing up, you agree to our
        </DefaultText>
        <DefaultText variant="pr2-2"> Terms of use </DefaultText>
        <DefaultText variant="pr2-1"> and </DefaultText>
        <DefaultText variant="pr2-2"> Privacy policies </DefaultText>
      </FormCheckbox>
      <DefaultButton
        onButtonPress={onHandleSignupSubmit}
        variant="primary"
        title="Sign Up"
      />
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
