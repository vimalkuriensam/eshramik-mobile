import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation-tabs";
import ProfileScreen from "../../screen/ProfileScreen";
import { Colors } from "../../static/Colors";

const tabScreenConfig = {
  Info: {
    screen: ProfileScreen,
    navigationOptions: {
      // tabBarIcon: (tabInfo) => (
      //   <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      // ),
      tabBarLabel: "Personal Information",
    },
  },
  Qualification: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Qualification",
    },
  },
  Profession: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Profession",
    },
  },
  Skill: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Skill",
    },
  },
  EmployeeDetails: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Employment Details",
    },
  },
  Overseas: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Overseas Opportunity",
    },
  },
  Documents: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Documents",
    },
  },
  Resume: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Resume Builder",
    },
  },
};

const ProfileTopTabNavigator = createMaterialTopTabNavigator(tabScreenConfig, {
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
