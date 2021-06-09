import React from "react";
import { ScrollView, Text, View } from "react-native";
import DefaultButton from "../../../components/atoms/DefaultButton";
import DefaultText from "../../../components/atoms/DefaultText";

import Title from "../../../components/atoms/Title";
import FormInput from "../../../components/molecules/FormInput";
import FormInputGroup from "../../../components/organisms/FormInputGroup";
import { INFO_NAME_VALUES } from "../data";

const Info = () => (
  <View>
    <FormInputGroup values={INFO_NAME_VALUES} onInputChange={() => {}} />
    <ScrollView></ScrollView>
  </View>
);

export default Info;
