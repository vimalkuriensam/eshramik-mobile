import React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import DefaultButton from "../../../components/atoms/DefaultButton";
import Dropdown from "../../../components/molecules/Dropdown";
import FormInput from "../../../components/molecules/FormInput";
import BirthdayPicker from "../../../components/organisms/BirthdayPicker";
import FormDropdownGroup from "../../../components/organisms/FormDropdownGroup";

const EmployeeDetails = ({ states, districts, jobs, loader }) => {
  console.log(states, districts, jobs);
  const mappedStates = states.map((state) => state.state);
  const mappedDistricts = districts.map((district) => district.district);
  const mappedJobs = jobs.map((job) => job.name);
  const [employeeDetProps, setEmployeeDetProps] = useState({
    name: "",
    startDate: "",
    endDate: "",
    title: "",
    state: "",
    city: "",
    salary: "",
    description: "",
  });

  const onHandleEmployeeDetProps = (type, value) =>
    setEmployeeDetProps((prevState) => ({
      ...prevState,
      [type]: value,
    }));

  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <FormInput
        label="Name of Organization/Company"
        variant="secondary"
        value={employeeDetProps.name}
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
        value={employeeDetProps.organization}
        onItemPress={onHandleEmployeeDetProps.bind(this, "title")}
        content={mappedJobs}
      />
      <FormDropdownGroup
        title="Job location"
        placeholder="State"
        value={employeeDetProps.state}
        onItemPress={onHandleEmployeeDetProps.bind(this, "state")}
        content={mappedStates}
      />
      {!!districts.length && (
        <Dropdown
          style={styles.dropDownMargin}
          onItemPress={onHandleEmployeeDetProps.bind(this, "city")}
          value={employeeDetProps.city}
          placeholder="City"
          content={mappedDistricts}
        />
      )}
      <FormInput
        label="Last drawn salary"
        value={employeeDetProps.salary}
        onInputChange={onHandleEmployeeDetProps.bind(this, "salary")}
      />
      <FormInput
        numberOfLines={20}
        style={{ height: 135 }}
        multiline={true}
        variant="secondary"
        label="Job description"
        value={employeeDetProps.description}
        onInputChange={onHandleEmployeeDetProps.bind(this, "description")}
      />
      <DefaultButton
        title="next"
        variant="primary"
        loader={loader}
        onButtonPress={() => console.log("pressed")}
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
