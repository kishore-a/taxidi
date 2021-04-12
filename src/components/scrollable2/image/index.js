import React from "react";
import { View, Text, Image } from "react-native";

const Expolore = ({ item }) => {
  const image_path = { uri: item.Image };
  return (
    <View style={{ marginRight: 50, flexDirection: "row",alignItems:'center' }}>
      <Image
        source={image_path}
        style={{ width: 80, height: 80, borderRadius: 10 }}
      />
      <View style={{alignItems:'center',marginLeft:10}}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginHorizontal: 10, }}>{" "}
          {item.Destination}
        </Text>
        <Text style={{color:'gray'}}>{item.Time_to_Destination}</Text>
      </View>
    </View>
  );
};
export default Expolore;
