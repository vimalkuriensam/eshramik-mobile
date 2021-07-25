import React, { useEffect } from "react";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { connect } from "react-redux";
import DefaultButton from "../../../components/atoms/DefaultButton";
import Dropdown from "../../../components/molecules/Dropdown";
import FormInput from "../../../components/molecules/FormInput";
import BirthdayPicker from "../../../components/organisms/BirthdayPicker";
import FormDropdownGroup from "../../../components/organisms/FormDropdownGroup";
import { Shade } from "../../../static/Colors";
import {
  clearDistrict,
  getDistrict,
} from "../../../store/actions/profile.action";

const EmployeeDetails = ({
  dispatch,
  states,
  districts,
  jobs,
  loader,
  onHandleSubmit,
}) => {
  const mappedStates = states.map((state) => state.state);
  const mappedDistricts = districts.map((district) => district.district);
  const mappedJobs = jobs.map((job) => job.name);
  const [employeeDetProps, setEmployeeDetProps] = useState([
    {
      name: "",
      startDate: "",
      endDate: "",
      title: "",
      state: "",
      city: "",
      salary: "",
      description: "",
    },
  ]);

  const [locationLoader, setLocationLoader] = useState(false);

  useEffect(() => {
    dispatch(clearDistrict());
  }, []);

  const onHandleEmployeeDetProps = (type, value, index = 0) => {
    let empDetCopy = [...employeeDetProps];
    empDetCopy[index][type] = value;
    setEmployeeDetProps(empDetCopy);
  };

  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <FormInput
        label="Name of Organization/Company"
        variant="secondary"
        value={employeeDetProps[0].name}
        onInputChange={onHandleEmployeeDetProps.bind(this, "name")}
      />
      <BirthdayPicker
        onHandleBirthday={onHandleEmployeeDetProps.bind(this, "startDate")}
        title="Start Date"
      />
      <BirthdayPicker
        onHandleBirthday={onHandleEmployeeDetProps.bind(this, "endDate")}
        title="End Date"
      />
      <FormDropdownGroup
        title="Job Title"
        value={employeeDetProps[0].title}
        onItemPress={onHandleEmployeeDetProps.bind(this, "title")}
        content={mappedJobs}
      />
      <FormDropdownGroup
        title="Job location"
        placeholder="State"
        value={employeeDetProps[0].state}
        onItemPress={(value) => {
          setLocationLoader(true);
          dispatch(clearDistrict());
          dispatch(getDistrict({ state: value })).then(() => {
            onHandleEmployeeDetProps("state", value);
            setLocationLoader(false);
          });
        }}
        content={mappedStates}
      />
      {locationLoader && (
        <ActivityIndicator color={Shade.secondary} size="small" />
      )}
      {!!districts.length && (
        <Dropdown
          style={styles.dropDownMargin}
          onItemPress={onHandleEmployeeDetProps.bind(this, "city")}
          value={employeeDetProps[0].city}
          placeholder="City"
          content={mappedDistricts}
        />
      )}
      <FormInput
        label="Last drawn salary"
        value={employeeDetProps[0].salary}
        onInputChange={onHandleEmployeeDetProps.bind(this, "salary")}
      />
      <FormInput
        numberOfLines={20}
        style={{ height: 135 }}
        multiline={true}
        variant="secondary"
        label="Job description"
        value={employeeDetProps[0].description}
        onInputChange={onHandleEmployeeDetProps.bind(this, "description")}
      />
      <DefaultButton
        title="next"
        variant="primary"
        loader={loader}
        onButtonPress={onHandleSubmit.bind(this, employeeDetProps)}
        style={{ marginTop: 30, marginBottom: 15 }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dropDownMargin: {
    marginTop: 18,
  },
});

const mapStateToProps = (state) => ({
  states: state.profile.addressState,
  districts: state.profile.addressDistrict,
  jobs: [...state.profile.technical, ...state.profile.nonTechnical],
});

export default connect(mapStateToProps)(EmployeeDetails);
