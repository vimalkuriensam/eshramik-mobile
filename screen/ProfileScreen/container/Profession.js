import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import FormDropdownGroup from "../../../components/organisms/FormDropdownGroup";

const Profession = () => {
  const [professionProps, setProfessionProps] = useState({
    technical: "",
    nonTechnical: "",
  });

  const onHandleProfessionProps = () => {}
  return (
    <ScrollView style={{ paddingHorizontal: 16, marginBottom: 150 }}>
      <FormDropdownGroup
        title="Technical"
        value={professionProps.technical}
        onItemPress={onHandleProfessionProps.bind(this, "board")}
        content={["MG", "Kerala"]}
      />
      <FormDropdownGroup
        title="Non Technical"
        value={professionProps.nonTechnical}
        onItemPress={onHandleProfessionProps.bind(this, "board")}
        content={["MG", "Kerala"]}
      />
    </ScrollView>
  );
};

export default Profession;
