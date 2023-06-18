import React from "react";
import {StyleSheet} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {QueryClientProvider} from "@tanstack/react-query";
import {StatusBar} from "expo-status-bar";

import DayWeatherCarousel from "./src/components/DayWeatherCarousel/DayWeatherCarousel";
import AppQueryClient from "./src/config/QueryClientConfig";

export default () => {
  return (
    <SafeAreaProvider style={s.container}>
      <QueryClientProvider client={AppQueryClient}>
        <StatusBar style="auto" />
        <DayWeatherCarousel />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
