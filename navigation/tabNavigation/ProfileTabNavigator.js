import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation-tabs";
import ProfileScreen from "../../screen/ProfileScreen";
import { Colors } from "../../static/Colors";

const tabScreenConfig = {
  Info: {
    screen: ProfileScreen,
  },
  Qualification: {
    screen: ProfileScreen,
  },
  Profession: {
    screen: ProfileScreen,
  },
  Skill: {
    screen: ProfileScreen,
  },
  EmployeeDetails: {
    screen: ProfileScreen,
  },
  Overseas: {
    screen: ProfileScreen,
  },
  Documents: {
    screen: ProfileScreen,
  },
  Resume: {
    screen: ProfileScreen,
  },
};

const ProfileTopTabNavigator = createStackNavigator(tabScreenConfig, {
  tabBarOptions: {
    activeTintColor: Colors.white,
    inactiveTintColor: Colors.blackMain,
    scrollEnabled: true,
    style: {
      height: 60,
      backgroundColor: Colors.primary,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
    labelStyle: {
      fontFamily: "proximaNova-Regular",
      fontSize: 10,
    },
    indicatorStyle: {
      backgroundColor: Colors.primary,
    },
  },
});

export default ProfileTopTabNavigator;
