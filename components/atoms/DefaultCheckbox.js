import React, { useState } from "react";
import CheckBox from "@react-native-community/checkbox";

import { Colors } from "../../static/Colors";

const DefaultCheckbox = ({ onCheckboxValue, value = undefined, ...rest }) => {
  const [inlineValue, setInlineValue] = useState(false);
  const toggleCheckBox = () => {
    if (value == undefined) {
      setInlineValue((prevState) => !prevState);
      onCheckboxValue.bind(this, inlineValue);
    } else onCheckboxValue.bind(this, !value);
  };
  return (
    <CheckBox
      tintColors={{ true: Colors.primary, false: Colors.greyMedium }}
      value={value == undefined ? inlineValue : value}
      onValueChange={toggleCheckBox}
      {...rest}
    />
  );
};

export default DefaultCheckbox;
