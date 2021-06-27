import React from "react";
import { View, Text } from "react-native";

import Login from "./container/Login";
import Signup from "./container/Signup";

const AuthScreen = ({ navigation }) => {
  const state = navigation.state.routeName;

  const onSignupHandle = () => {
    console.log("here");
    navigation.navigate({
      routeName: "Signup",
    });
  };
  if (state === "Login") return <Login onSignupHandle={onSignupHandle} />;
  return <Signup onSignupHandle={onSignupHandle} />;
};

export default AuthScreen;
