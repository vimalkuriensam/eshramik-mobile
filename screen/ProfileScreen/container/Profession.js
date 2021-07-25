import React, { useState } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import DefaultButton from "../../../components/atoms/DefaultButton";
import FormDropdownGroup from "../../../components/organisms/FormDropdownGroup";

const Profession = ({
  technicalProfession,
  nonTechnicalProfession,
  loader,
  onHandleSubmit
}) => {
  const mappedTechnical = technicalProfession.map((tech) => tech.name);
  const mappedNonTechnical = nonTechnicalProfession.map(
    (nonTech) => nonTech.name
  );
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
        content={mappedTechnical}
      />
      <FormDropdownGroup
        title="Non Technical"
        value={professionProps.nonTechnical}
        onItemPress={onHandleProfessionProps.bind(this, "nonTechnical")}
        content={mappedNonTechnical}
      />
      <DefaultButton
        title="next"
        variant="primary"
        style={{ marginTop: 30, marginBottom: 15 }}
        loader={loader}
        onButtonPress={onHandleSubmit.bind(this, professionProps)}
      />
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  technicalProfession: state.profile.technical,
  nonTechnicalProfession: state.profile.nonTechnical,
});

export default connect(mapStateToProps)(Profession);
