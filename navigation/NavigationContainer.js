import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";
import { AuthNavigator } from "./RootNavigator";

const AppNavigator = ({ isAuth }) => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({ isAuth: !!state.auth.accessToken });

export default connect(mapStateToProps)(AppNavigator);
