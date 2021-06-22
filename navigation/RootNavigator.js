import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Colors } from "../static/Colors";
import { Auth as AuthScreen } from "../screen";

import ProfileTopTabNavigator from "./tabNavigation/ProfileTabNavigator";

const ProfileNavigation = createStackNavigator(
  {
    profile: {
      screen: ProfileTopTabNavigator,
      navigationOptions: {
        headerTitle: "Create your Eshramik Resume",
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.white,
        height: 181.5,
      },
      headerTintColor: Colors.blackSecondary,
      headerTitleStyle: {
        fontFamily: "proximaA-bold",
        fontSize: 25,
      },
    },
  }
);

const AuthNavigator = createStackNavigator({
  Auth: {
    screen: AuthScreen,
  },
});

const RootNavigation = createSwitchNavigator({
  Auth: AuthNavigator,
  Profile: ProfileNavigation,
});

export default createAppContainer(RootNavigation);
