import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";

import BodyTitle from "../../../components/atoms/BodyTitle";
import DefaultInput from "../../../components/atoms/DefaultInput";
import DefaultText from "../../../components/atoms/DefaultText";
import { Shade } from "../../../static/Colors";
import { otpVerify } from "../../../store/actions/auth.action";
import { getState } from "../../../store/actions/profile.action";
import { OTP_AUTO_SUBMIT_TIME } from "../data";

let autoSubmitOtpInterval;

const OTP = ({ navigation, dispatch }) => {
  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  useEffect(() => {
    autoSubmitOtpTimerIntervalCallbackReference.current =
      autoSubmitOtpTimerIntervalCallback;
  });
  const firstInputRef = useRef(null),
    secondInputRef = useRef(null),
    thirdInputRef = useRef(null),
    fourthInputRef = useRef(null);

  const autoSubmitOtpTimerIntervalCallbackReference = useRef();

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [otpArray, setOtpArray] = useState(["", "", "", ""]);
  const [autoSubmitOtpTime, setAutoSubmitOtpTime] =
    useState(OTP_AUTO_SUBMIT_TIME);

  useEffect(() => {
    if (error) setOtpArray(["", "", "", ""]);
  }, [error]);

  const refCallback = (textInputRef) => (node) => (textInputRef.current = node);

  const mobile = navigation.getParam("mobile");
  const isLogin = navigation.getParam("isLogin");

  const onHandleOTP =
    (index) =>
    ({ target }) => {
      if (error) setError(false);
      const { value } = target;
      if (isNaN(Number(value))) return;
      const otpArrayCopy = [...otpArray];
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);
      if (value !== "") {
        if (index === 0) secondInputRef.current.focus();
        else if (index === 1) thirdInputRef.current.focus();
        else if (index === 2) fourthInputRef.current.focus();
        else {
          setAutoSubmitOtpTime(OTP_AUTO_SUBMIT_TIME);
          startAutoSubmitOTPTimer();
          Keyboard.dismiss();
        }
      }
    };

  const onHandleKeyPress =
    (index) =>
    ({ nativeEvent: { key: value } }) => {
      if (value === "Backspace" && otpArray[index] === "") {
        if (index === 1) firstInputRef.current.focus();
        else if (index === 2) secondInputRef.current.focus();
        else if (index === 3) thirdInputRef.current.focus();
      }
    };

  const autoSubmitOtpTimerIntervalCallback = () => {
    if (autoSubmitOtpTime <= 0) {
      clearInterval(autoSubmitOtpInterval);
      setLoader(true);
      dispatch(
        otpVerify({
          otp: otpArray.join(""),
          mobile,
          login: isLogin ? true : false,
        })
      )
        .then(async () => {
          await dispatch(getState())
          setLoader(false);
          navigation.navigate("Profile");
        })
        .catch((err) => {
          setLoader(false);
          setError(true);
        });
    }
    setAutoSubmitOtpTime(autoSubmitOtpTime - 1);
  };

  const startAutoSubmitOTPTimer = () => {
    if (autoSubmitOtpInterval) clearInterval(autoSubmitOtpInterval);
    autoSubmitOtpInterval = setInterval(
      () => autoSubmitOtpTimerIntervalCallbackReference.current(),
      1000
    );
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image source={require("../../../assets/images/jobs-logo.png")} />
      </View>
      <View style={styles.center}>
        <BodyTitle style={{ color: Shade.greyDark2 }} variant="secondary">
          OTP Verification
        </BodyTitle>
      </View>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset="50">
        <View style={styles.otpContainer}>
          {[firstInputRef, secondInputRef, thirdInputRef, fourthInputRef].map(
            (textInputRef, index) => (
              <DefaultInput
                type="number"
                variant="secondary"
                onTextChange={onHandleOTP(index)}
                onKeyPress={onHandleKeyPress(index)}
                keyboardType="numeric"
                maxLength={1}
                value={otpArray[index]}
                key={index}
                refCallback={refCallback(textInputRef)}
              />
            )
          )}
        </View>
      </KeyboardAvoidingView>
      {loader ? (
        <ActivityIndicator
          style={styles.loader}
          size="large"
          color={Shade.tertiary}
        />
      ) : (
        <View style={styles.info}>
          <DefaultText variant="pr1-1">
            Please enter verification code
          </DefaultText>
          <DefaultText variant="pr1-1">
            <View>
              <DefaultText variant="pr1-1">Didn't get the code?</DefaultText>
            </View>
            <View>
              <DefaultText variant="pr1-2"> Resend</DefaultText>
            </View>
          </DefaultText>
          {error && <DefaultText color="red">Incorrect OTP</DefaultText>}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  screen: {
    padding: 16,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 66,
    marginBottom: 88,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});

export default connect()(OTP);
