import React, { useState } from "react";
import { ScrollView } from "react-native";
import DefaultButton from "../../../components/atoms/DefaultButton";
import DefaultText from "../../../components/atoms/DefaultText";
import FormCheckbox from "../../../components/molecules/FormCheckbox";

import FormInput from "../../../components/molecules/FormInput";
import BirthdayPicker from "../../../components/organisms/BirthdayPicker";
import FormDropdownGroup from "../../../components/organisms/FormDropdownGroup";
import { INFO_NAME_VALUES } from "../data";
import DefaultRadio from "../../../components/atoms/DefaultRadio";
import FormRadio from "../../../components/molecules/FormRadio";

const Info = () => {
  const [infoProps, setInfoProps] = useState({
    fullName: "",
    dob: "",
    houseNumber: "",
    streetLocality: "",
    pincode: "",
    state: "",
    city: "",
    district: "",
    sameAsAddress: undefined,
    perm_houseNumber: "",
    perm_streetLocality: "",
    perm_pincode: "",
    perm_state: "",
    perm_city: "",
    perm_district: "",
    email: "",
  });

  const onHandleInfoProps = (type) => (value) =>
    setInfoProps((prevState) => ({ ...prevState, [type]: value }));

  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <FormInput
        variant="secondary"
        label="Full Name"
        value={infoProps.fullname}
        onInputChange={onHandleInfoProps("fullname")}
      />
      <FormRadio
        variant="secondary"
        label="Gender"
        contents={["Male", "Female", "Others"]}
        onHandleCheckbox={val => console.log(val)}
      />
      <FormRadio
        variant="secondary"
        label="Marital Status"
        contents={["Married", "Unmarried"]}
        onHandleCheckbox={val => console.log(val)}
      />
      <BirthdayPicker
        title="Date of Birthday"
        onHandleBirthday={onHandleInfoProps("dob")}
      />
      <FormInput
        variant="secondary"
        label="House Number"
        value={infoProps.houseNumber}
        onInputChange={onHandleInfoProps("houseNumber")}
      />
      <FormInput
        variant="secondary"
        label="Street Locality"
        value={infoProps.streetLocality}
        onInputChange={onHandleInfoProps("streetLocality")}
      />
      <FormInput
        variant="secondary"
        label="Pincode"
        value={infoProps.pincode}
        onInputChange={onHandleInfoProps("pincode")}
      />
      <FormDropdownGroup
        title="State"
        value={infoProps.state}
        onItemPress={onHandleInfoProps("state")}
        content={["Kerala", "TamilNadu"]}
      />
      <FormDropdownGroup
        title="City"
        value={infoProps.city}
        onItemPress={onHandleInfoProps("city")}
        content={["Kottayam", "Trivandrum"]}
      />
      <FormDropdownGroup
        title="District"
        value={infoProps.district}
        onItemPress={onHandleInfoProps("district")}
        content={["Kottayam", "ABC"]}
      />
      <FormCheckbox
        variant="2"
        value={infoProps.sameAsAddress}
        onSetCheckboxValue={onHandleInfoProps("sameAsAddress")}
      >
        <DefaultText variant="pr1-1">
          Permanent Address{" "}
          <DefaultText variant="pr1-2">same as above</DefaultText>
        </DefaultText>
      </FormCheckbox>
      <FormInput
        variant="secondary"
        label="House Number"
        value={infoProps.perm_houseNumber}
        onInputChange={onHandleInfoProps("perm_houseNumber")}
      />
      <FormInput
        variant="secondary"
        label="Street Locality"
        value={infoProps.perm_streetLocality}
        onInputChange={onHandleInfoProps("perm_streetLocality")}
      />
      <FormInput
        variant="secondary"
        label="Pincode"
        value={infoProps.perm_pincode}
        onInputChange={onHandleInfoProps("perm_pincode")}
      />
      <FormDropdownGroup
        title="State"
        value={infoProps.perm_state}
        onItemPress={onHandleInfoProps("perm_state")}
        content={["Kerala", "TamilNadu"]}
      />
      <FormDropdownGroup
        title="City"
        value={infoProps.perm_city}
        onItemPress={onHandleInfoProps("perm_city")}
        content={["Kottayam", "Trivandrum"]}
      />
      <FormDropdownGroup
        title="District"
        value={infoProps.perm_district}
        onItemPress={onHandleInfoProps("perm_district")}
        content={["Kottayam", "ABC"]}
      />
      <FormInput
        variant="secondary"
        label="Email"
        value={infoProps.email}
        onInputChange={onHandleInfoProps("email")}
      />
      <DefaultButton
        title="next"
        variant="primary"
        onButtonPress={() => console.log("pressed")}
      />
    </ScrollView>
  );
};

export default Info;
