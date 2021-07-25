import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Search as SearchScreen, searchScreenOptions } from "../../../screen";

const SearchNav = createStackNavigator();

const SearchNavigator = () => {
  return (
    <SearchNav.Navigator screenOptions={SearchNavDefaultOptions}>
      <SearchNav.Screen
        options={searchScreenOptions}
        name="SearchStack"
        component={SearchScreen}
      />
    </SearchNav.Navigator>
  );
};

const SearchNavDefaultOptions = {
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

export default SearchNavigator;
