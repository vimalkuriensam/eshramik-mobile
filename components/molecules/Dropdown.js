import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  FlatList,
} from "react-native";

import { Shade } from "../../static/Colors";
import BodyText from "../atoms/BodyText";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Dropdown = ({ content = [], value = "", onItemPress }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    if (value) setSelectedValue(value);
  }, [value]);

  const onHandleModalVisibility = () =>
    setVisibility((prevState) => !prevState);

  const getHeight = () =>
    content.length < 7 ? 50.2 * +content.length : HEIGHT / 1.98;

  const onHandleSelectedItem = (item) => {
    onItemPress(item);
    onHandleModalVisibility();
  };

  const displayContent = ({ item }) => (
    <TouchableOpacity
      onPress={onHandleSelectedItem.bind(this, item)}
      activeOpacity={0.4}
      style={styles.displayItems}
    >
      <BodyText variant="secondaryDark3" color="black">
        {item}
      </BodyText>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onHandleModalVisibility}>
        <View style={styles.inputContainer}>
          <View style={styles.display}>
            <BodyText variant="secondaryDark3">{selectedValue}</BodyText>
          </View>
          <View style={styles.arrowContainer}>
            <View style={styles.arrowDown}></View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Modal
        transparent={true}
        animationType="fade"
        visible={visibility}
        style={styles.modal}
        onRequestClose={() => setVisibility(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={{ width: WIDTH, height: HEIGHT }}
          onPressOut={onHandleModalVisibility}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPressIn={() => {}}
            style={{ ...styles.modalContainer, height: getHeight() }}
          >
            <FlatList
              data={content}
              keyExtractor={(_item, index) => index.toString()}
              renderItem={displayContent}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
  },
  display: {
    height: 44,
    backgroundColor: Shade.greyLight1,
    width: "87%",
    borderRadius: 10,
    overflow: "hidden",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  arrowContainer: {
    backgroundColor: Shade.secondary,
    justifyContent: "center",
    alignContent: "center",
    width: "13%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  arrowDown: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 9,
    borderRightWidth: 9,
    borderTopWidth: 18,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "white",
    alignSelf: "center",
    marginTop: 5,
  },
  modal: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: Shade.white,
    borderColor: Shade.secondary,
    borderWidth: 2,
    borderRadius: 10,
    width: WIDTH - 40,
    top: HEIGHT / 5,
    position: "absolute",
    alignSelf: "center",
    elevation: 4,
  },
  displayItems: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Shade.secondary,
    justifyContent: "center",
  },
});

export default Dropdown;
