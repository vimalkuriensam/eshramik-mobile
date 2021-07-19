import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import moment from "moment";

import DefaultText from "../atoms/DefaultText";
import Dropdown from "../molecules/Dropdown";

const BirthdayPicker = ({
  title,
  onHandleBirthday,
  style,
  type = { year: true, month: true, day: true },
}) => {
  const getYears = () => {
    let yearList = [];
    const yearNow = moment().format("YYYY");
    for (let i = +yearNow; i > +yearNow - 120; i--) yearList = [...yearList, i];
    return [...yearList];
  };
  const days = [...Array(32).keys()].splice(1);
  const months = [...Array(13).keys()].splice(1);
  const years = getYears();

  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  const onSetDate = (type, value) => {
    setDate((prevState) => {
      const dateSet = {
        ...prevState,
        [type]:
          value.toString().length == 1
            ? `0${value}`.toString()
            : value.toString(),
      };
      const isComplete = Object.values(dateSet).every((val) => !!val);
      if (isComplete) {
        onHandleBirthday(
          moment(
            `${dateSet.day}-${dateSet.month}-${dateSet.year}`,
            "DD-MM-YYYY"
          ).format("YYYY-MM-DD")
        );
      }
      return dateSet;
    });
  };

  return (
    <View style={{ ...styles.container, ...style }}>
      {title && <DefaultText variant="pr1-1">{title}</DefaultText>}
      <View style={styles.dropGroup}>
        {type.day && (
          <Dropdown
            value={date.day}
            placeholder="DD"
            content={days}
            onItemPress={onSetDate.bind(this, "day")}
          />
        )}
        {type.month && (
          <Dropdown
            value={date.month}
            placeholder="MM"
            style={styles.drop}
            content={months}
            onItemPress={onSetDate.bind(this, "month")}
          />
        )}
        {type.year && (
          <Dropdown
            value={date.year}
            placeholder="YY"
            style={styles.drop}
            content={years}
            onItemPress={onSetDate.bind(this, "year")}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  dropGroup: {
    flexDirection: "row",
    width: "90%",
    marginTop: 10,
  },
  drop: {
    marginLeft: 35,
  },
});

export default BirthdayPicker;
