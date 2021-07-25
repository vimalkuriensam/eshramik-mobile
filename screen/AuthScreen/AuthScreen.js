import React from "react";

import Login from "./container/Login";
import OTP from "./container/OTP";
import Signup from "./container/Signup";

const AuthScreen = ({navigation, route}) => {
  const state = route.name;

  const onSignupRoute = () => navigation.navigate("Signup");
  

  if (state === "Login")
    return <Login navigation={navigation} onSignupRoute={onSignupRoute} />;
  else if (state === "Signup") return <Signup navigation={navigation} />;
  return <OTP navigation={navigation} />;
};

export default AuthScreen;
