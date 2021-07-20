import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import DefaultButton from "../../../components/atoms/DefaultButton";
import FormRadio from "../../../components/molecules/FormRadio";

const Overseas = ({ loader }) => {
  const [overseasProps, setOverseasProps] = useState({
    validPassport: "",
    overseas: "",
  });

  const onHandleOverseasProps = (type, value) =>
    setOverseasProps((prevState) => ({
      ...prevState,
      [type]: value === "Yes" ? true : false,
    }));
  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <FormRadio
        variant="secondary"
        label="Are you interested in overseas opportunity"
        value={overseasProps.validPassport == "Yes" ? "Yes": "No"}
        contents={["Yes", "No"]}
        style={{ justifyContent: "flex-start" }}
        onHandleCheckbox={onHandleOverseasProps.bind(this, 'validPassport')}
      />
      <FormRadio
        variant="secondary"
        value={overseasProps.overseas == "Yes" ? "Yes": "No"}
        label="Do you have a valid Indian passport?"
        contents={["Yes", "No"]}
        style={{ justifyContent: "flex-start" }}
        onHandleCheckbox={onHandleOverseasProps.bind(this, 'overseas')}
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

export default Overseas;
