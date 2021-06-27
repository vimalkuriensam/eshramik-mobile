import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import DefaultButton from "../../../components/atoms/DefaultButton";
import DefaultInput from "../../../components/atoms/DefaultInput";
import DefaultText from "../../../components/atoms/DefaultText";

const Login = ({ onSignupHandle }) => {
  return (
    <ScrollView style={{ paddingHorizontal: 16, flex: 1 }}>
      <View style={styles.imageContainer}>
        <Image source={require("../../../assets/images/jobs-logo.png")} />
      </View>
      <View style={styles.actionContainer}>
        <DefaultInput
          style={styles.loginInputStyle}
          placeholder="Mobile number"
        />
        <DefaultButton
          variant="primary"
          title="Login"
          onButtonPress={() => console.log("button pressed")}
        />
        <DefaultText style={styles.accountText}>
          <View>
            <DefaultText variant="pr2-1">Don't have an account?</DefaultText>
          </View>
          <TouchableNativeFeedback onPress={onSignupHandle}>
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

export default Login;
