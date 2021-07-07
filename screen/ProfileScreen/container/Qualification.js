import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import FormDropdownGroup from "../../../components/organisms/FormDropdownGroup";
import DefaultButton from "../../../components/atoms/DefaultButton";

const Qualification = () => {
  const [qualificationProps, setQualificationProps] = useState({
    board: "",
  });

  const onHandleQualificationProps = (type) => {};
  return (
    <ScrollView style={{ paddingHorizontal: 16, marginBottom: 150 }}>
      <FormDropdownGroup
        title="Board name"
        value={qualificationProps.board}
        onItemPress={onHandleQualificationProps("board")}
        content={["MG", "Kerala"]}
      />
      <FormDropdownGroup
        title="Institution name"
        value={qualificationProps.board}
        onItemPress={onHandleQualificationProps("board")}
        content={["MG", "Kerala"]}
      />
      <FormDropdownGroup
        title="Degree"
        value={qualificationProps.board}
        onItemPress={onHandleQualificationProps("board")}
        content={["MG", "Kerala"]}
      />
      <FormDropdownGroup
        title="College/University"
        value={qualificationProps.board}
        onItemPress={onHandleQualificationProps("board")}
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
