import React, {useState} from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import CityData from "../../config/cityCoordinates.json";
// import {useWether} from "../../networking/weather.hook";
import WeatherCard from "../WeatherCard/WeatherCard";

const DayWeatherCarousel: React.FC = () => {
  // const {weather} = useWether(60.1699, 24.9384);

  const [currantIndex, setCurrantIndex] = useState<number>(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index =
      (event.nativeEvent.targetContentOffset?.x ?? 0) /
      Dimensions.get("screen").width;
    setCurrantIndex(index);
  };

  return (
    <SafeAreaView edges={["top", "bottom"]}>
      <Text>{`Currant index ${currantIndex}`}</Text>
      <FlatList
        data={CityData}
        renderItem={({item}) => <WeatherCard city={item} />}
        keyExtractor={(item, index) => `${index}_${item.name}_${index}`}
        horizontal
        pagingEnabled={true}
        onScrollEndDrag={onScroll}
      />
    </SafeAreaView>
  );
};

export default DayWeatherCarousel;
