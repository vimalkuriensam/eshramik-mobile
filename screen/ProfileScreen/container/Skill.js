import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import BodyTitle from "../../../components/atoms/BodyTitle";
import DefaultButton from "../../../components/atoms/DefaultButton";
import DefaultRadio from "../../../components/atoms/DefaultRadio";
import BirthdayPicker from "../../../components/organisms/BirthdayPicker";

const Skill = () => {
  const [skillProps, setSkillProps] = useState({
    skill: "",
    experience: {
      year: "",
      month: "",
    },
  });

  const onHandleSkill = (value) =>
    setSkillProps((prevState) => ({ ...prevState, skill: value }));

  const onHandleExperience = (type, value) => {
    console.log(type, value);
  }
    // setSkillProps((prevState) => ({
    //   ...prevState,
    //   experience: {
    //     ...prevState.experience,
    //     [type]: value,
    //   },
    // }));

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
      <DefaultButton
        title="next"
        variant="primary"
        onButtonPress={() => console.log("pressed")}
      />
    </ScrollView>
  );
};

export default Skill;
