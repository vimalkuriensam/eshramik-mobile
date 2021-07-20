import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Documents from "./container/Documents";
import EmployeeDetails from "./container/EmployeeDetails";
import Info from "./container/Info";
import Overseas from "./container/Overseas";
import Profession from "./container/Profession";
import Qualification from "./container/Qualification";
import Resume from "./container/Resume";
import Skill from "./container/Skill";
import { Shade } from "../../static/Colors";
import Stepper from "./container/Stepper";
import { funcMap, PROFILE_TAB_INFO } from "./data";
import { connect } from "react-redux";

const ProfileScreen = ({ navigation, dispatch }) => {
  const [tabInfo, setTabInfo] = useState({
    position: null,
    title: null,
  });

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const match = PROFILE_TAB_INFO.find(
      (info) => info.name === navigation.state.routeName
    );
    setTabInfo({ position: match.id, title: match.title });
  }, [navigation.state.routeName]);

  const onHandleStepperPress = async (index) => {
    setLoader(true);
    const position = index == 1 ? tabInfo.position : tabInfo.position + index;
    const response = await funcMap[position](dispatch);
    if (response) {
      const route = PROFILE_TAB_INFO[tabInfo.position + index - 1].name;
      navigation.navigate(route);
    }
    setLoader(false);
  };

  const getTabScreen = useCallback(
    (tabScreen) => {
      switch (tabScreen) {
        case "Info":
          return <Info loader={loader} />;
        case "Qualification":
          return <Qualification loader={loader} />;
        case "Profession":
          return <Profession loader={loader} />;
        case "Skill":
          return <Skill loader={loader} />;
        case "EmployeeDetails":
          return <EmployeeDetails loader={loader} />;
        case "Overseas":
          return <Overseas loader={loader} />;
        case "Documents":
          return <Documents loader={loader} />;
        case "Resume":
          return <Resume loader={loader} />;
        default:
          return <Info loader={loader} />;
      }
    },
    [navigation.state.routeName, loader]
  );

  return (
    <View style={styles.profileContainer}>
      <StatusBar
        currentHeight={"44"}
        backgroundColor={Shade.primary}
        style="light"
      />
      <Stepper
        step={tabInfo.position}
        total={PROFILE_TAB_INFO.length}
        title={tabInfo.title}
        loader={loader}
        onHandleStepperPress={onHandleStepperPress}
      />
      {getTabScreen(navigation.state.routeName)}
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: Shade.white,
    flex: 1,
  },
});

export default connect()(ProfileScreen);
