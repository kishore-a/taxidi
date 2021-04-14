import React from "react";
import { View, Text, FlatList } from "react-native";
import Expolore from "./image";
import feed from '../../../assets/data/feed2'

const Scrollable2 = () => {
  return (
    <FlatList
      horizontal
      data={feed}
      // key={places.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Expolore item={item} />}
    />
  );
};
export default Scrollable2;
//This component exports the Explore nearby scroll list in the Home screen.The data comes from feed2