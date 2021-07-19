import React, { useState } from "react";
import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import { ScrollView, StyleSheet, Image, Alert } from "react-native";
import DefaultButton from "../../../components/atoms/DefaultButton";
import { Camera, requestPermissionsAsync } from "expo-camera";

const Documents = () => {
  const [imageChosen, setImageChosen] = useState(false);
  const [cameraSelected, setCameraSelected] = useState(false);
  const [imageUri, setImageUri] = useState();
  const [type, setType] = useState(Camera.Constants.Type.back);

  const onSelectImage = async () => {
    setImageChosen(false);
    setCameraSelected(false);
    const { status } = await requestMediaLibraryPermissionsAsync();
    if (status != "granted") {
      Alert.alert(
        "Insufficient Permissions",
        "You need to provide gallery permission to proceed",
        [{ text: "OK" }]
      );
      return;
    }
    const { cancelled, uri } = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!cancelled) {
      setImageChosen(true);
      setImageUri(uri);
    }
  };

  const onSelectCamera = async () => {
    const { status } = await requestPermissionsAsync();
    if (status != "granted") {
      Alert.alert(
        "Insufficient Permissions",
        "You need to provide camera permission to proceed",
        [{ text: "OK" }]
      );
      return;
    }
    setCameraSelected(true);
  };

  return (
    <ScrollView>
      <DefaultButton
        variant="secondary"
        icon="camera-outline"
        title="Click a Photo"
        style={styles.cameraButton}
        onButtonPress={onSelectCamera}
      />
      <DefaultButton
        variant="secondary"
        icon="images-outline"
        title="Select Photo"
        style={styles.cameraButton}
        onButtonPress={onSelectImage}
      />
      {imageChosen && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )}
      {cameraSelected && <Camera type={type} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cameraButton: {
    marginVertical: 17,
  },
});

export default Documents;
