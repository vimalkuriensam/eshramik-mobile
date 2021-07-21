import React, { useRef, useState } from "react";
import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  requestMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import {
  ScrollView,
  StyleSheet,
  Image,
  Alert,
  Modal,
  Dimensions,
  View,
} from "react-native";
import DefaultButton from "../../../components/atoms/DefaultButton";
import { Camera, requestPermissionsAsync } from "expo-camera";
import { Shade } from "../../../static/Colors";

const Documents = ({ loader }) => {
  const [imageChosen, setImageChosen] = useState(false);
  const [cameraSelected, setCameraSelected] = useState(false);
  const [imageUri, setImageUri] = useState();
  const [type, setType] = useState(Camera.Constants.Type.front);

  const ref = useRef(null);

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

  const onHandleFlipCamera = () =>
    type === Camera.Constants.Type.back
      ? setType(Camera.Constants.Type.front)
      : setType(Camera.Constants.Type.back);

  const onHandlePhoto = async () => {
    const { uri } = await ref.current.takePictureAsync();
    if (uri) {
      setImageUri(uri);
      setImageChosen(true);
      setCameraSelected(false);
    }
  };

  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
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
        loader={loader}
      />
      {imageChosen && (
        <View>
          <View style={styles.imageContainer}>
            <Image source={{ uri: imageUri }} style={styles.image} />
          </View>
          <DefaultButton
            title="next"
            variant="primary"
            loader={loader}
            onButtonPress={()=>{}}
            style={{ marginTop: 30, marginBottom: 15 }}
          />
        </View>
      )}
      <Modal
        animationType="fade"
        visible={cameraSelected}
        onRequestClose={() => setCameraSelected(false)}
      >
        <Camera
          type={type}
          style={{ height: Dimensions.get("window").height }}
          ref={ref}
        >
          <View>
            <DefaultButton
              variant="secondary"
              title="Click Photo"
              style={styles.cameraButton}
              onButtonPress={onHandlePhoto}
            />
            <DefaultButton
              variant="secondary"
              title="Flip Camera"
              onButtonPress={onHandleFlipCamera}
            />
          </View>
        </Camera>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cameraButton: {
    marginVertical: 17,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 210,
    height: 227,
    borderRadius: 10,
    borderColor: Shade.primary,
    borderWidth: 3,
  },
});

export default Documents;
