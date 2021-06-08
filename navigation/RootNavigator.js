// import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Profile as ProfileScreen } from "../screen";

const ProfileNavigation = createStackNavigator({
  profile: {
    screen: ProfileScreen,
  },
});

export default createAppContainer(ProfileNavigation);
