import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { signup } from "../../store/actions/auth.action";

import Login from "./container/Login";
import Signup from "./container/Signup";

const AuthScreen = ({ dispatch, navigation }) => {
  const state = navigation.state.routeName;

  const onSignupRoute = () => {
    navigation.navigate({
      routeName: "Signup",
    });
  };

  const onSignupSubmit = ({ email, mobile, name }) => {
    dispatch(signup({ email, mobile, name }));
  };
  if (state === "Login") return <Login onSignupRoute={onSignupRoute} />;
  return <Signup onSignupSubmit={onSignupSubmit} />;
};

export default connect()(AuthScreen);
