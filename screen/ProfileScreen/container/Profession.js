import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import FormDropdownGroup from "../../../components/organisms/FormDropdownGroup";

const Profession = () => {
  const [professionProps, setProfessionProps] = useState({
    technical: "",
    nonTechnical: "",
  });

  const onHandleProfessionProps = (type, value) =>
    setProfessionProps((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <FormDropdownGroup
        title="Technical"
        value={professionProps.technical}
        onItemPress={onHandleProfessionProps.bind(this, "technical")}
        content={["MG", "Kerala"]}
      />
      <FormDropdownGroup
        title="Non Technical"
        value={professionProps.nonTechnical}
        onItemPress={onHandleProfessionProps.bind(this, "nonTechnical")}
        content={["MG", "Kerala"]}
      />
    </ScrollView>
  );
};

export default Profession;
