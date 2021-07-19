import React, { useEffect, useRef } from "react";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import RootNavigator from "./RootNavigator";

const NavigationContainer = ({ isAuth }) => {
  const navRef = useRef();
  useEffect(() => {
    if (!isAuth)
      navRef.current.dispatch(
        NavigationActions.navigate({
          routeName: "Auth",
        })
      );
  }, [isAuth]);
  return <RootNavigator ref={navRef} />;
};

const mapStateToProps = (state) => ({ isAuth: !!state.auth.accessToken });

export default connect(mapStateToProps)(NavigationContainer);
