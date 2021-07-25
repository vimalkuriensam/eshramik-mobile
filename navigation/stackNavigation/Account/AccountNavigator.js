import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Account as AccountScreen } from "../../../screen";

const AccountNav = createStackNavigator();

const AccountNavigator = () => {
  return (
    <AccountNav.Navigator>
      <AccountNav.Screen name="Search" component={AccountScreen} />
    </AccountNav.Navigator>
  );
};

export default AccountNavigator;
