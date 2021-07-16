import React from "react";
import { StyleSheet, View } from "react-native";
import DefaultCheckbox from "./DefaultCheckbox";
import DefaultText from "./DefaultText";

const DefaultRadio = ({ contents = [], contentPerColumn = 3 }) => {
  //   const ref = useRef();
  const maxRowLength = Math.ceil(contents.length / contentPerColumn);
  const rows = [...Array(maxRowLength)];
  const radioRows = rows.map((row, index) =>
    contents.slice(
      index * contentPerColumn,
      index * contentPerColumn + contentPerColumn
    )
  );
  const radioList = radioRows.map((row, index) => (
    <View key={index} style={styles.radioRow}>
      {row.map((col, idx) => (
        <View key={idx} style={styles.radio}>
          <DefaultCheckbox />
          <DefaultText style={styles.radioText} variant="pl2">
            {col}
          </DefaultText>
        </View>
      ))}
    </View>
  ));
  return <View>{radioList}</View>;
};

const styles = StyleSheet.create({
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: "15%",
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioText: {
    marginTop: 5,
    marginLeft: 3
  },
});

export default DefaultRadio;
