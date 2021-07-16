import React, { useState } from "react";
import CheckBox from "@react-native-community/checkbox";

import { Colors, Shade } from "../../static/Colors";

const DefaultCheckbox = ({ onCheckboxValue, value = undefined, ...rest }) => {
  const [inlineValue, setInlineValue] = useState(!!value);
  const toggleCheckBox = () => {
    // if (value == undefined) {
    //   setInlineValue((prevState) => !prevState);
    //   onCheckboxValue(inlineValue);
    // } else {
    //   console.log('checkboxval', value);
      setInlineValue(!value);
      onCheckboxValue(!value);
    // }
  };
  return (
    <CheckBox
      tintColors={{ true: Shade.secondary, false: Colors.greyMedium }}
      value={inlineValue}
      onValueChange={toggleCheckBox}
      {...rest}
    />
  );
};

export default DefaultCheckbox;
