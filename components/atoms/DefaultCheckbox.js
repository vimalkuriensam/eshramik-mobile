import React, { useState } from "react";
import CheckBox from "@react-native-community/checkbox";

import { Colors, Shade } from "../../static/Colors";

const DefaultCheckbox = ({ onCheckboxValue, value = undefined, ...rest }) => {
  // const [inlineValue, setInlineValue] = useState(!!value);
  const toggleCheckBox = () => {
    // setInlineValue(!value);
    onCheckboxValue(!value);
  };

  return (
    <CheckBox
      tintColors={{ true: Shade.secondary, false: Shade.greyLight1 }}
      value={value}
      uncheckedColor={"#000"}
      style={{
        // backgroundColor: "#ccc",
        width: 35,
        height: 30,
        transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
      }}
      onValueChange={toggleCheckBox}
      {...rest}
    />
  );
};

export default DefaultCheckbox;
