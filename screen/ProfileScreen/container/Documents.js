import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DefaultButton from "../../../components/atoms/DefaultButton";

const Documents = () => {
  return (
    <ScrollView>
      <DefaultButton
        variant="secondary"
        icon="camera-outline"
        title="Click a Photo"
        style={styles.cameraButton}
      />
      <DefaultButton
        variant="secondary"
        icon="images-outline"
        title="Select Photo"
        style={styles.cameraButton}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cameraButton: {
    marginVertical: 17,
  },
});

export default Documents;
