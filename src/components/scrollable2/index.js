import React from "react";
import { View, Text, FlatList } from "react-native";
import Expolore from "./image";

const places = [
  {
    id: "1",
    Image:
      "https://image.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37306.jpg",
    Destination: "Kodaikanal",
    Time_to_Destination: "8 hours drive",
  },
  {
    id: "2",
    Image:
      "https://image.freepik.com/free-vector/tourist-tents-camping-forest-area-sunrise-morning-landscape-nature-background-with-water-mountains-hills-horizontal-summer-camp-concept_1150-39394.jpg",
    Destination: "Kanyakumari",
    Time_to_Destination: "10 hours drive",
  },
  {
    id: "3",
    Image:
      "https://image.freepik.com/free-vector/mountain-lake-sunset-landscape-realistic-tree-forest-mountain-silhouettes-evening-wood-panorama-illustration-wild-nature-background_1150-39419.jpg",
    Destination: "Valparai",
    Time_to_Destination: "7 hours drive",
  },
  {
    id: "4",
    Image:
      "https://image.freepik.com/free-vector/swamp-with-boat-water-lily-leaves_107791-4089.jpg",
    Destination: "Kochin",
    Time_to_Destination: "15 hours drive",
  },
  {
    id: "5",
    Image:
      "https://image.freepik.com/free-vector/outdoor-nature-adventure-camping-illustration-cartoon-flat-tourist-camp-with-picnic-spot-tent-among-forest-mountain-landscape_1150-37347.jpg",
    Destination: "Munnar",
    Time_to_Destination: "9 hours drive",
  },
  {
    id: "6",
    Image:
      "https://image.freepik.com/free-vector/peaceful-hill-forest-tree-with-natural-pond-mountains-beautiful-landscape-outdoors-adventure-green-silhouette-illustration_1150-39397.jpg",
    Destination: "Salem",
    Time_to_Destination: "8 hours drive",
  },
];

const Scrollable2 = () => {
  return (
    <FlatList
      horizontal
      data={places}
      key={places.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Expolore item={item} />}
    />
  );
};
export default Scrollable2;
