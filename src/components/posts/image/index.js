import React from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import Ficons from "react-native-vector-icons/FontAwesome";
import {useNavigation} from '@react-navigation/native'

const Post = ({ item }) => {
  const image_path = { uri: item.Image };
  const location = item.Place;
  const id=item.id;
  const rating = item.rating;
  const numberofpeoplerated = item.number_of_people_rated;
  const house_type = item.house_type;
  const description = item.House_description;
  const before_price = item.before_price;
  const price = item.after_price;
  const navigation=useNavigation();

const gotopage=()=>{
navigation.navigate('DetailedScreen',{postId:item.id})
}
  return (
    <Pressable onPress={gotopage}>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Image
          source={image_path}
          style={{
            width: Dimensions.get("screen").width - 30,
            height: 200,
            borderRadius: 15,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 10,
            alignSelf: "flex-start",
            marginLeft: 20,
          }}
        >
          <Ficons name="star" size={15} color={"#fc0356"} />
          <Text style={{ fontSize: 14, marginHorizontal: 7 }}>{rating}</Text>
          <Text style={{ color: "gray", fontSize: 14 }}>
            {numberofpeoplerated}
          </Text>
        </View>
        <View style={{ alignSelf: "flex-start", marginLeft: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "900", marginBottom: 6 }}>
            {house_type}
            {" - "}
            {location}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "900", marginBottom: 6 }}>
            {description}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                textDecorationLine: "line-through",
                fontSize: 18,
                color: "grey",
              }}
            >
              {"$"}
              {before_price}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "black" }}>
              {" "}
              {"$"}
              {price}
            </Text>
            <Text style={{ fontSize: 18 }}> / night</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
export default Post;
