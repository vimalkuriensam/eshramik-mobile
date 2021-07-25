import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Saved as SavedScreen, savedScreenOptions } from "../../../screen";

const SaveNav = createStackNavigator();

const SaveNavigator = () => {
  return (
    <SaveNav.Navigator screenOptions={SaveNavDefaultOptions}>
      <SaveNav.Screen
        options={savedScreenOptions}
        name="SaveStack"
        component={SavedScreen}
      />
    </SaveNav.Navigator>
  );
};

const SaveNavDefaultOptions = {
  headerTitle: "Saved Jobs",
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

export default SaveNavigator;
