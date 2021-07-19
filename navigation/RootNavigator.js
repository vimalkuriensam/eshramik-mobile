import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Auth as AuthScreen } from "../screen";

import ProfileScreen from "../screen/ProfileScreen";

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

const ProfileNavigation = createStackNavigator(tabScreenConfig, {
  defaultNavigationOptions: {
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
  },
});

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: AuthScreen,
    },
    Signup: {
      screen: AuthScreen,
    },
    OTP: {
      screen: AuthScreen,
    },
  },
  {
    headerMode: false,
  }
);

const RootNavigation = createSwitchNavigator({
  Auth: AuthNavigator,
  Profile: ProfileNavigation,
});

export default createAppContainer(RootNavigation);
