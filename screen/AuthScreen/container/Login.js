import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import { connect } from "react-redux";
import DefaultButton from "../../../components/atoms/DefaultButton";
import DefaultInput from "../../../components/atoms/DefaultInput";
import DefaultText from "../../../components/atoms/DefaultText";
import { login } from "../../../store/actions/auth.action";

const Login = ({ onSignupRoute, navigation, dispatch }) => {
  const [mobile, setMobile] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onHandleMobile = ({ target }) => setMobile(target.value);

  const onLoginSubmit = () => {
    setIsLoading(true);
    dispatch(login({ mobile, login: true }))
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        navigation.navigate("OTP", {
          mobile,
        });
      })
      .catch(() => setIsLoading(false));
  };
  return (
    <ScrollView style={{ paddingHorizontal: 16, flex: 1 }}>
      <View style={styles.imageContainer}>
        <Image source={require("../../../assets/images/jobs-logo.png")} />
      </View>
      <View style={styles.actionContainer}>
        <DefaultInput
          value={mobile}
          onTextChange={onHandleMobile}
          type="number"
          keyboardType="phone-pad"
          style={styles.loginInputStyle}
          placeholder="Mobile number"
        />
        <DefaultButton
          variant="primary"
          title="Login"
          onButtonPress={onLoginSubmit}
          loader={isLoading}
        />
        <DefaultText style={styles.accountText}>
          <View>
            <DefaultText variant="pr2-1">Don't have an account?</DefaultText>
          </View>
          <TouchableNativeFeedback onPress={onSignupRoute}>
            <View>
              <DefaultText variant="pr2-2"> Create Account </DefaultText>
            </View>
          </TouchableNativeFeedback>
        </DefaultText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 66,
    marginBottom: 88,
  },
  loginInputStyle: {
    marginBottom: 13.5,
  },
  actionContainer: {
    height: 350,
    flex: 1,
    flexGrow: 1,
    justifyContent: "flex-end",
    // position: 'absolute',
    // width: '100%',
    // bottom: 5
  },
  accountText: {
    // textAlign: "center",
    justifyContent: "center",
    display: "flex",
    width: "100%",
  },
});

export default connect()(Login);
