import React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";

import {City} from "../../models/City";

type Props = {
  city: City;
};

const WeatherCard: React.FC<Props> = ({city}: Props) => {
  return (
    <View style={styles.rootContainer}>
      <Text>{city.name}</Text>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  rootContainer: {
    width: Dimensions.get("window").width - 20,
    height: 600,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    // backgroundColor: "yellow",
    borderRadius: 10,
    borderWidth: 1,
  },
});
