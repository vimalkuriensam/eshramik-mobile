import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { enableScreens } from "react-native-screens";

import RootNavigator from "./navigation/RootNavigator";

enableScreens();

const fetchFonts = () =>
  Font.loadAsync({
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.otf"),
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.otf"),
    "montserrat-medium": require("./assets/fonts/Montserrat-Medium.otf"),
    "proximaA-bold": require("./assets/fonts/ProximaNovaAltBold.otf"),
    "proximaNova-Regular": require("./assets/fonts/ProximaNova-Regular.otf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
  });

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded)
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );

  return <RootNavigator />;
};

export default App;
