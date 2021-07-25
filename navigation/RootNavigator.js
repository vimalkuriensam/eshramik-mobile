import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Auth as AuthScreen } from "../screen";

import ProfileScreen from "../screen/ProfileScreen";

const { Navigation: ProfileNavigation, Screen: ProfilesScreen } =
  createStackNavigator();

export const ProfileNavigator = () => (
  <ProfileNavigation screenOptions={ProfileDefaultNavOptions}>
    <ProfilesScreen name="Info" component={ProfileScreen} />
    <ProfilesScreen name="Qualification" component={ProfileScreen} />
    <ProfilesScreen name="Profession" component={ProfileScreen} />
    <ProfilesScreen name="Skill" component={ProfileScreen} />
    <ProfilesScreen name="EmployeeDetails" component={ProfileScreen} />
    <ProfilesScreen name="Overseas" component={ProfileScreen} />
    <ProfilesScreen name="Documents" component={ProfileScreen} />
    <ProfilesScreen name="Resume" component={ProfileScreen} />
  </ProfileNavigation>
);

const ProfileDefaultNavOptions = {
  headerTitle: "Create your eshramik resume",
  headerStyle: {
    backgroundColor: "#FFE1A1",
    height: 60,
  },
  headerTintColor: "#727272",
  headerTitleStyle: {
    alignSelf: "center",
    fontFamily: "poppins-medium",
    fontSize: 16,
  },
};

const { Navigator: AuthsNavigator, Screen: AuthsScreen } =
  createStackNavigator();

export const AuthNavigator = () => (
  <AuthsNavigator screenOptions={{ headerShown: false }}>
    <AuthsScreen name="Login" component={AuthScreen} />
    <AuthsScreen name="Signup" component={AuthScreen} />
    <AuthsScreen name="OTP" component={AuthScreen} />
  </AuthsNavigator>
);

