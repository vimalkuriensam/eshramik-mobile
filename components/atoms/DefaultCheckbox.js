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
      tintColors={{ true: Shade.secondary, false: Colors.greyMedium }}
      value={value}
      onValueChange={toggleCheckBox}
      {...rest}
    />
  );
};

export default DefaultCheckbox;
