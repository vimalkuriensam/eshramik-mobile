import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { enableScreens } from "react-native-screens";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import RootNavigator from "./navigation/RootNavigator";
import { store, persistor } from "./store/ConfigureStore";

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

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
