import React from "react";
import { View, Text, Image, Pressable } from "react-native";
const Live_anywhere = ({ item }) => {
  const image_path = { uri: item.Image };
  const title = item.Title;
  return (
    <View>
      <Pressable>
        <Image
          source={image_path}
          style={{
            width: 250,
            height: 250,
            resizeMode: "cover",
            borderRadius: 10,
            marginRight: 30,
          }}
        />
      </Pressable>
      <Text style={{ marginTop: 10, fontSize: 15, fontWeight: "bold" }}>
        {title}
      </Text>
    </View>
  );
};
export default Live_anywhere;
