import React from "react";
import { ScrollView, Text, View } from "react-native";
import DefaultText from "../../../components/atoms/DefaultText";

import Title from "../../../components/atoms/Title";
import FormInput from "../../../components/molecules/FormInput";

const Info = () => (
  <View>
    <Title variant="pSecondaryBlue">Personal Information</Title>
    <DefaultText variant="pn3Black">First Name</DefaultText>
    <FormInput variant="primary" label="Name" />
    <FormInput variant="secondary" label="Age" />
    <ScrollView></ScrollView>
  </View>
);

export default Info;
