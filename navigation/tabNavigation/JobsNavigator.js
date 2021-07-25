import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Home as HomeScreen,
  Account as AccountScreen,
  Saved as SavedScreen,
  Search as SearchScreen,
} from "../../screen";
import { Shade } from "../../static/Colors";
import { StyleSheet, Text, View } from "react-native";
import DefaultText from "../../components/atoms/DefaultText";
import { Ionicons } from "@expo/vector-icons";
import AccountNavigator from "../stackNavigation/Account/AccountNavigator";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

const JobsNavigator = () => (
  <Navigator labeled={false} barStyle={styles.bar}>
    <Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ ...styles.icons, opacity: focused ? 1 : 0.5 }}>
            <Ionicons name="home-outline" size={22} color={Shade.white} />
            <DefaultText variant="pl5-1">Home</DefaultText>
          </View>
        ),
      }}
    />
    <Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ ...styles.icons, opacity: focused ? 1 : 0.5 }}>
            <Ionicons name="search-outline" size={22} color={Shade.white} />
            <DefaultText variant="pl5-1">Search</DefaultText>
          </View>
        ),
      }}
    />
    <Screen
      name="Saved"
      component={SavedScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ ...styles.icons, opacity: focused ? 1 : 0.5 }}>
            <Ionicons name="share-outline" size={22} color={Shade.white} />
            <DefaultText variant="pl5-1">Saved</DefaultText>
          </View>
        ),
      }}
    />
    <Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ ...styles.icons, opacity: focused ? 1 : 0.5 }}>
            <Ionicons name="ios-person-outline" size={22} color={Shade.white} />
            <DefaultText variant="pl5-1">Profile</DefaultText>
          </View>
        ),
      }}
    />
  </Navigator>
);

const styles = StyleSheet.create({
  bar: {
    backgroundColor: Shade.tertiary,
    height: 84,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: "hidden",
  },
  icons: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    minWidth: 50,
    height: 50,
  },
});

export default JobsNavigator;
