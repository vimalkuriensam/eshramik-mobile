import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import DefaultButton from "../../../components/atoms/DefaultButton";
import DefaultCheckbox from "../../../components/atoms/DefaultCheckbox";
import DefaultText from "../../../components/atoms/DefaultText";

import Title from "../../../components/atoms/Title";
import FormCheckbox from "../../../components/molecules/FormCheckbox";
import FormInput from "../../../components/molecules/FormInput";
import FormCheckboxGroup from "../../../components/organisms/FormCheckboxGroup";
import FormInputGroup from "../../../components/organisms/FormInputGroup";
import { INFO_NAME_VALUES } from "../data";

const Info = () => {
  const [gender, setGender] = useState({
    male: false,
    female: false,
    other: false,
  });
  return (
    <View>
      <FormInputGroup values={INFO_NAME_VALUES} onInputChange={() => {}} />
      <FormCheckboxGroup width="50%" variant="secondaryVertical">
        <FormCheckbox
          label="male"
          id="male"
          value={gender.male}
          onSetCheckboxValue={() => {}}
        />
        <FormCheckbox
          label="female"
          id="female"
          value={gender.female}
          onSetCheckboxValue={() => {}}
        />
        <FormCheckbox
          label="other"
          id="other"
          value={gender.other}
          onSetCheckboxValue={() => {}}
        />
      </FormCheckboxGroup>
    </View>
  );
};

export default Info;
