// import { createAppContainer, createSwitchNavigator } from "react-navigation";
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Auth as AuthScreen } from "../screen";

import ProfileScreen from "../screen/ProfileScreen";

// const tabScreenConfig = {
//   Info: {
//     screen: ProfileScreen,
//   },
//   Qualification: {
//     screen: ProfileScreen,
//   },
//   Profession: {
//     screen: ProfileScreen,
//   },
//   Skill: {
//     screen: ProfileScreen,
//   },
//   EmployeeDetails: {
//     screen: ProfileScreen,
//   },
//   Overseas: {
//     screen: ProfileScreen,
//   },
//   Documents: {
//     screen: ProfileScreen,
//   },
//   Resume: {
//     screen: ProfileScreen,
//   },
// };

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

// const ProfileNavigation = createStackNavigator(tabScreenConfig, {
//   defaultNavigationOptions: {
//     headerTitle: "Create your eshramik resume",
//     headerStyle: {
//       backgroundColor: "#FFE1A1",
//       height: 60,
//     },
//     headerTintColor: "#727272",
//     headerTitleStyle: {
//       alignSelf: "center",
//       fontFamily: "poppins-medium",
//       fontSize: 16,
//     },
//   },
// });

const { Navigator: AuthsNavigator, Screen: AuthsScreen } =
  createStackNavigator();

export const AuthNavigator = () => (
  <AuthsNavigator screenOptions={{ headerShown: false }}>
    <AuthsScreen name="Login" component={AuthScreen} />
    <AuthsScreen name="Signup" component={AuthScreen} />
    <AuthsScreen name="OTP" component={AuthScreen} />
  </AuthsNavigator>
);

// const AuthNavigator = createStackNavigator(
//   {
//     Login: {
//       screen: AuthScreen,
//     },
//     Signup: {
//       screen: AuthScreen,
//     },
//     OTP: {
//       screen: AuthScreen,
//     },
//   },
//   {
//     headerMode: false,
//   }
// );

// const RootNavigation = createSwitchNavigator({
//   Profile: ProfileNavigation,
//   Auth: AuthNavigator,
// });

// export default createAppContainer(RootNavigation);
