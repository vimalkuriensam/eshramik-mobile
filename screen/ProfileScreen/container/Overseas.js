import React, { useState } from "react";
import { ScrollView } from "react-native";
import DefaultButton from "../../../components/atoms/DefaultButton";
import FormRadio from "../../../components/molecules/FormRadio";

const Overseas = ({ loader, onHandleSubmit }) => {
  const [overseasProps, setOverseasProps] = useState({
    validPassport: "",
    overseas: "",
  });

  const onHandleOverseasProps = (type, value) =>{
    setOverseasProps((prevState) => ({
      ...prevState,
      [type]: value === "Yes" ? true : false,
    }));
  }

  const getValue = (type) => {
    if (overseasProps[type]) return "Yes";
    else if (overseasProps[type] === false) return "No";
    else return null;
  }

  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <FormRadio
        variant="secondary"
        label="Are you interested in overseas opportunity"
        value={getValue('overseas')}
        contents={["Yes", "No"]}
        style={{ justifyContent: "flex-start" }}
        onHandleCheckbox={onHandleOverseasProps.bind(this, 'overseas')}
      />
      <FormRadio
        variant="secondary"
        value={getValue('validPassport')}
        label="Do you have a valid Indian passport?"
        contents={["Yes", "No"]}
        style={{ justifyContent: "flex-start" }}
        onHandleCheckbox={onHandleOverseasProps.bind(this, 'validPassport')}
      />
      <DefaultButton
        title="next"
        variant="primary"
        loader={loader}
        onButtonPress={onHandleSubmit.bind(this, overseasProps)}
        style={{ marginTop: 30, marginBottom: 15 }}
      />
    </ScrollView>
  );
};

export default Overseas;
