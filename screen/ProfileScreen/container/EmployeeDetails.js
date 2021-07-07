import React from "react";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import FormDropdownGroup from "../../../components/organisms/FormDropdownGroup";

const EmployeeDetails = () => {
  const [employeeDetProps, setEmployeeDetProps] = useState({
    organization: "",
    jobTitle: "",
    location: "",
    lastSalary: "",
  });

  const onHandleEmployeeDetProps = () => {};
  return (
    <ScrollView style={{ paddingHorizontal: 16, marginBottom: 150 }}>
      <FormDropdownGroup
        title="Name of Organization/Company"
        value={employeeDetProps.organization}
        onItemPress={onHandleEmployeeDetProps.bind(this, "board")}
        content={["MG", "Kerala"]}
      />
      <FormDropdownGroup
        title="Job Title"
        value={employeeDetProps.organization}
        onItemPress={onHandleEmployeeDetProps.bind(this, "board")}
        content={["MG", "Kerala"]}
      />
      <FormDropdownGroup
        title="Job location"
        value={employeeDetProps.organization}
        onItemPress={onHandleEmployeeDetProps.bind(this, "board")}
        content={["MG", "Kerala"]}
      />
      <FormDropdownGroup
        title="Last drawn salary"
        value={employeeDetProps.organization}
        onItemPress={onHandleEmployeeDetProps.bind(this, "board")}
        content={["MG", "Kerala"]}
      />
    </ScrollView>
  );
};

export default EmployeeDetails;
