import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import Documents from "./container/Documents";
import EmployeeDetails from "./container/EmployeeDetails";
import Info from "./container/Info";
import Overseas from "./container/Overseas";
import Profession from "./container/Profession";
import Qualification from "./container/Qualification";
import Resume from "./container/Resume";
import Skill from "./container/Skill";

const ProfileScreen = ({ navigation }) => {
  useEffect(() => {
    const willFocusSub = navigation.addListener(
      "willFocus",
      getTabScreen.bind(this, navigation.state.key)
    );
    return () => willFocusSub.remove();
  }, [navigation.state.key]);

  const getTabScreen = (tabScreen) => {
    switch (tabScreen) {
      case "Info":
        return <Info />;
      case "Qualification":
        return <Qualification />;
      case "Profession":
        return <Profession />;
      case "Skill":
        return <Skill />;
      case "EmployeeDetails":
        return <EmployeeDetails />;
      case "Overseas":
        return <Overseas />;
      case "Documents":
        return <Documents />;
      case "Resume":
        return <Resume />;
      default:
        return <Info />;
    }
  };
  return (
    <View style={styles.screen}>
      {getTabScreen(navigation.state.key)}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default ProfileScreen;
