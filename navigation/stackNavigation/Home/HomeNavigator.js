import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home as HomeScreen } from "../../../screen";

const HomeNav = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeNav.Navigator screenOptions={HomeNavDefaultOptions}>
      <HomeNav.Screen name="HomeStack" component={HomeScreen} />
    </HomeNav.Navigator>
  );
};

const HomeNavDefaultOptions = {
  headerTitle: "Search Jobs",
  headerStyle: {
    backgroundColor: "#FFE1A1",
    height: 40,
  },
  headerTintColor: "#727272",
  headerTitleStyle: {
    alignSelf: "center",
    fontFamily: "poppins-medium",
    fontSize: 16,
  },
};

export default HomeNavigator;
