import React, { useState } from "react";
import { ScrollView } from "react-native";
import FormDropdownGroup from "../../../components/organisms/FormDropdownGroup";
import DefaultButton from "../../../components/atoms/DefaultButton";
import FormRadio from "../../../components/molecules/FormRadio";

const Qualification = () => {
  const [qualificationProps, setQualificationProps] = useState({
    school: "",
    board: "",
    specialization: "",
    institution: "",
    degree: "",
    college: "",
  });

  const onHandleQualificationProps = (type, value) =>
    setQualificationProps((prevState) => ({
      ...prevState,
      [type]: value,
    }));
    
  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <FormRadio
        variant="secondary"
        label="School"
        value={qualificationProps.school}
        contents={[
          "NA",
          "5th grade",
          "8th grade",
          "High School",
          "Senior secondary",
        ]}
        onHandleCheckbox={onHandleQualificationProps.bind(this, "school")}
      />
      <FormDropdownGroup
        title="Board name"
        value={qualificationProps.board}
        onItemPress={onHandleQualificationProps.bind(this, "board")}
        content={["cbse", "state", "icse"]}
      />
      <FormRadio
        variant="secondary"
        label="Specialization/field of study"
        value={qualificationProps.specialization}
        contents={[
          "ITI",
          "NCTVT",
          "Certification",
          "Technical",
          "Diploma",
          "Others",
        ]}
        onHandleCheckbox={onHandleQualificationProps.bind(
          this,
          "specialization"
        )}
      />
      <FormDropdownGroup
        title="Institution name"
        value={qualificationProps.institution}
        onItemPress={onHandleQualificationProps.bind(this, "institution")}
        content={["MG", "Kerala"]}
      />
      <FormDropdownGroup
        title="Degree"
        value={qualificationProps.degree}
        onItemPress={onHandleQualificationProps.bind(this, "degree")}
        content={["MG", "Kerala"]}
      />
      <FormDropdownGroup
        title="College/University"
        value={qualificationProps.college}
        onItemPress={onHandleQualificationProps.bind(this, "college")}
        content={["MG", "Kerala"]}
      />
      <DefaultButton
        title="next"
        variant="primary"
        onButtonPress={() => console.log("pressed")}
      />
    </ScrollView>
  );
};

export default Qualification;
