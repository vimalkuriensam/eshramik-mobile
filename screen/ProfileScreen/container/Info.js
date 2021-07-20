import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import DefaultButton from "../../../components/atoms/DefaultButton";
import DefaultText from "../../../components/atoms/DefaultText";
import FormCheckbox from "../../../components/molecules/FormCheckbox";

import FormInput from "../../../components/molecules/FormInput";
import BirthdayPicker from "../../../components/organisms/BirthdayPicker";
import FormDropdownGroup from "../../../components/organisms/FormDropdownGroup";
import { INFO_NAME_VALUES } from "../data";
import FormRadio from "../../../components/molecules/FormRadio";
import { connect } from "react-redux";
import {
  clearDistrict,
  clearRegion,
  getDistrict,
  getRegion,
} from "../../../store/actions/profile.action";
import { Shade } from "../../../static/Colors";

const Info = ({ loader, states, districts, regions, dispatch }) => {
  const mappedStates = states.map((state) => state.state);
  const mappedDistricts = districts.map((district) => district.district);
  const mappedRegions = regions.map((region) => region.post_office);
  const [infoProps, setInfoProps] = useState({
    fullName: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    address: {
      houseNo: "",
      street: "",
      state: "",
      district: "",
      region: "",
      pin: "",
    },
    sameAsAddress: false,
    permenantAddress: {
      houseNo: "",
      street: "",
      state: "",
      district: "",
      region: "",
      pin: "",
    },
    email: "",
  });

  const [locationLoader, setLocationLoader] = useState({
    state: false,
    district: false,
  });

  useEffect(() => {
    dispatch(clearDistrict());
    dispatch(clearRegion());
  }, []);

  const onHandleInfoProps = (type) => (value) =>
    setInfoProps((prevState) => ({ ...prevState, [type]: value }));

  const onHandleAddress = (type1, type2, value) => {
    setInfoProps((prevState) => ({
      ...prevState,
      [type1]: {
        ...prevState[type1],
        [type2]: value,
      },
    }));
  };

  const onHandleSubmit = () => console.log(infoProps);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 16 }}>
        <FormInput
          variant="secondary"
          label="Full Name"
          value={infoProps.fullname}
          onInputChange={onHandleInfoProps("fullName")}
        />
        <FormRadio
          variant="secondary"
          label="Gender"
          value={infoProps.gender}
          contents={["Male", "Female", "Others"]}
          onHandleCheckbox={onHandleInfoProps("gender")}
        />
        <FormRadio
          variant="secondary"
          value={infoProps.maritalStatus}
          label="Marital Status"
          contents={["Married", "Unmarried"]}
          onHandleCheckbox={onHandleInfoProps("maritalStatus")}
        />
        <BirthdayPicker
          title="Date of Birthday"
          onHandleBirthday={onHandleInfoProps("dob")}
        />
        <FormInput
          variant="secondary"
          label="House Number"
          value={infoProps.address.houseNo}
          onInputChange={onHandleAddress.bind(this, "address", "houseNo")}
        />
        <FormInput
          variant="secondary"
          label="Street Locality"
          value={infoProps.address.street}
          onInputChange={onHandleAddress.bind(this, "address", "street")}
        />
        <FormInput
          variant="secondary"
          label="Pincode"
          value={infoProps.address.pin}
          onInputChange={onHandleAddress.bind(this, "address", "pin")}
        />
        <FormDropdownGroup
          title="State"
          value={infoProps.address.state}
          onItemPress={(value) => {
            setLocationLoader((prevState) => ({ ...prevState, state: true }));
            dispatch(getDistrict({ state: value })).then(() => {
              onHandleAddress("address", "state", value);
              setLocationLoader((prevState) => ({
                ...prevState,
                state: false,
              }));
            });
          }}
          content={mappedStates}
        />
        {locationLoader.state && (
          <ActivityIndicator color={Shade.secondary} size="large" />
        )}

        {mappedDistricts.length > 0 && (
          <FormDropdownGroup
            title="District"
            value={infoProps.address.district}
            onItemPress={(value) => {
              setLocationLoader((prevState) => ({
                ...prevState,
                district: true,
              }));
              dispatch(getRegion({ district: value })).then(() => {
                onHandleAddress("address", "district", value);
                setLocationLoader((prevState) => ({
                  ...prevState,
                  district: false,
                }));
              });
            }}
            content={mappedDistricts}
          />
        )}

        {locationLoader.district && (
          <ActivityIndicator color={Shade.secondary} size="large" />
        )}
        {!!mappedRegions.length && (
          <FormDropdownGroup
            title="Region"
            value={infoProps.address.region}
            onItemPress={onHandleAddress.bind(this, "address", "region")}
            content={mappedRegions}
          />
        )}
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
          value={
            infoProps.sameAsAddress
              ? infoProps.address.houseNo
              : infoProps.permenantAddress.houseNo
          }
          onInputChange={onHandleAddress.bind(
            this,
            "permanantAddress",
            "houseNo"
          )}
        />
        <FormInput
          variant="secondary"
          label="Street Locality"
          value={
            infoProps.sameAsAddress
              ? infoProps.address.street
              : infoProps.permenantAddress.street
          }
          onInputChange={onHandleAddress.bind(
            this,
            "permanantAddress",
            "street"
          )}
        />
        <FormInput
          variant="secondary"
          label="Pincode"
          value={
            infoProps.sameAsAddress
              ? infoProps.address.pin
              : infoProps.permenantAddress.pin
          }
          onInputChange={onHandleAddress.bind(this, "permanantAddress", "pin")}
        />

        <FormDropdownGroup
          title="State"
          value={
            infoProps.sameAsAddress
              ? infoProps.address.state
              : infoProps.permenantAddress.state
          }
          onItemPress={(value) => {
            setLocationLoader((prevState) => ({ ...prevState, state: true }));
            dispatch(getDistrict({ state: value })).then(() => {
              onHandleAddress("permenantAddress", "state", value);
              setLocationLoader((prevState) => ({
                ...prevState,
                state: false,
              }));
            });
          }}
          content={mappedStates}
        />
        {locationLoader.state && (
          <ActivityIndicator color={Shade.secondary} size="large" />
        )}
        {!!mappedDistricts.length && (
          <FormDropdownGroup
            title="District"
            value={
              infoProps.sameAsAddress
                ? infoProps.address.district
                : infoProps.permenantAddress.district
            }
            onItemPress={(value) => {
              setLocationLoader((prevState) => ({
                ...prevState,
                district: true,
              }));
              dispatch(getRegion({ district: value })).then(() => {
                onHandleAddress("permenantAddress", "district", value);
                setLocationLoader((prevState) => ({
                  ...prevState,
                  district: false,
                }));
              });
            }}
            content={mappedDistricts}
          />
        )}
        {locationLoader.district && (
          <ActivityIndicator color={Shade.secondary} size="large" />
        )}
        {!!mappedRegions.length && (
          <FormDropdownGroup
            title="Region"
            value={
              infoProps.sameAsAddress
                ? infoProps.address.region
                : infoProps.permenantAddress.region
            }
            onItemPress={onHandleAddress.bind(
              this,
              "permenantAddress",
              "region"
            )}
            content={mappedRegions}
          />
        )}
        <FormInput
          variant="secondary"
          label="Email"
          value={infoProps.email}
          onInputChange={onHandleInfoProps("email")}
        />
        <DefaultButton
          title="next"
          variant="primary"
          loader={loader}
          style={{ marginTop: 30, marginBottom: 15 }}
          onButtonPress={onHandleSubmit}
        />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  states: state.profile.addressState,
  districts: state.profile.addressDistrict,
  regions: state.profile.addressRegion,
});

export default connect(mapStateToProps)(Info);
