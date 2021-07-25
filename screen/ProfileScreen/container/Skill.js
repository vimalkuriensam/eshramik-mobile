import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import BodyTitle from "../../../components/atoms/BodyTitle";
import DefaultButton from "../../../components/atoms/DefaultButton";
import DefaultRadio from "../../../components/atoms/DefaultRadio";
import DefaultText from "../../../components/atoms/DefaultText";
import BirthdayPicker from "../../../components/organisms/BirthdayPicker";

const Skill = ({ loader, onHandleSubmit }) => {
  const [skillProps, setSkillProps] = useState({
    skill: "",
    experience: {
      year: 0,
      month: 0,
    },
  });

  const onHandleSkill = (value) =>
    setSkillProps((prevState) => ({ ...prevState, skill: value }));

  const onHandleExperience = (type, value) => {
    setSkillProps((prevState) => ({ ...prevState, experience: value }));
  };

  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <DefaultRadio
        contents={["Highly Skilled", "Semi Skilled", "Unskilled"]}
        value={skillProps.skill}
        contentPerColumn={2}
        onHandleCheckbox={onHandleSkill}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <BodyTitle variant="primaryDark">Total Experience</BodyTitle>
      </View>
      <BirthdayPicker
        onHandleBirthday={onHandleExperience.bind(this, "year")}
        type={{ year: true, month: true, day: false }}
      />
      {(!!skillProps.experience.year || !!skillProps.experience.month) && (
        <View style={styles.experience}>
          <DefaultText variant="pl2">
            {`${
              skillProps.experience.year ? skillProps.experience.year : 0
            } years ${skillProps.experience.month ? skillProps.experience.month: 0} months`}
          </DefaultText>
        </View>
      )}
      <DefaultButton
        title="next"
        variant="primary"
        style={{ marginTop: 30, marginBottom: 15 }}
        loader={loader}
        onButtonPress={onHandleSubmit.bind(this, skillProps)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  experience: {
    alignItems: "center",
    marginTop: 25,
  },
});

export default Skill;
