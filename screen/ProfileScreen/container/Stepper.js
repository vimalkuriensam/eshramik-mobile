import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Shade } from "../../../static/Colors";
import BodyTitle from "../../../components/atoms/BodyTitle";
import DefaultText from "../../../components/atoms/DefaultText";

const Stepper = ({
  step = 1,
  total,
  title = "default",
  onHandleStepperPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        {step > 1 ? (
          <TouchableOpacity onPress={onHandleStepperPress.bind(this, -1)}>
            <Ionicons name="chevron-back" size={40} color={Shade.tertiary} />
          </TouchableOpacity>
        ) : (
          <Text style={{ marginLeft: 40 }}>&nbsp;</Text>
        )}
        <View style={styles.info}>
          <View style={styles.value}>
            <Text style={styles.number}>{step}</Text>
          </View>
          <DefaultText style={styles.steps} variant="pl3-2">
            {step} of {total}
          </DefaultText>
          <BodyTitle style={styles.title} variant="primaryDark">
            {title}
          </BodyTitle>
        </View>
        {step < total ? (
          <TouchableOpacity onPress={onHandleStepperPress.bind(this, 1)}>
            <Ionicons name="chevron-forward" size={40} color={Shade.tertiary} />
          </TouchableOpacity>
        ) : (
          <Text style={{ marginRight: 40 }}>&nbsp;</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  stepIndicator: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },
  number: {
    fontFamily: "poppins-medium",
    fontSize: 20,
    color: Shade.white,
  },
  steps: {
    marginTop: 5,
    marginBottom: 8,
  },
  title: {
    marginTop: 8,
  },
  value: {
    width: 40,
    height: 40,
    backgroundColor: Shade.tertiary,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    alignItems: "center",
  },
});

export default Stepper;
