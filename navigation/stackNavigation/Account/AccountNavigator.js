import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Account as AccountScreen } from "../../../screen";

const AccountNav = createStackNavigator();

const AccountNavigator = () => {
  return (
    <AccountNav.Navigator screenOptions={AccountNavDefaultOptions}>
      <AccountNav.Screen name="AccountStack" component={AccountScreen} />
    </AccountNav.Navigator>
  );
};

const AccountNavDefaultOptions = {
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

export default AccountNavigator;
