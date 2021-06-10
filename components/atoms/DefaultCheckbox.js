import React, { useState } from "react";

import CheckBox from "@react-native-community/checkbox";
import { Colors } from "../../static/Colors";

const DefaultCheckbox = ({ onCheckboxValue, ...rest }) => {
  const [value, setValue] = useState(false);
  const toggleCheckBox = () => {
    setValue((prevState) => !prevState);
    onCheckboxValue.bind(this, value);
  };
  return (
    <CheckBox
      tintColors={{ true: Colors.primary, false: Colors.greyMedium }}
      value={value}
      onValueChange={toggleCheckBox}
      {...rest}
    />
  );
};

export default DefaultCheckbox;
