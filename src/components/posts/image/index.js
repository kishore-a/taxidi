import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Ficons from "react-native-vector-icons/FontAwesome";

const Post = () => {
  return (
    <View style={{ alignItems: "center", marginTop: 70 }}>
      <Image
        source={{
          uri:
            "https://curlytales.com/wp-content/uploads/2016/09/Pondicherry-1280x720.jpg",
        }}
        style={{
          width: Dimensions.get("screen").width - 30,
          height: 200,
          borderRadius: 20,
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
        <Text style={{ fontSize: 14, marginHorizontal: 7 }}>4.7</Text>
        <Text style={{ color: "gray", fontSize: 14 }}>(130)</Text>
      </View>
      <View style={{alignSelf:'flex-start',marginLeft:20}}>
        <Text style={{fontSize:18,fontWeight:'900'}}>Entire House -Pondicherry</Text>
        <Text style={{fontSize:18,fontWeight:'900'}}>Casa Vista - Apartment with full sea view</Text>
        <View style={{flexDirection:'row'}}>
            <Text style={{textDecorationLine:'line-through',fontSize:18,color:'grey'}}>$50</Text>
            <Text style={{fontWeight:'bold',fontSize:18,color:'black'}}> {" "}$30</Text>
            <Text style={{fontSize:18,}}>{" "}/ night</Text>
        </View>
      </View>
    </View>
  );
};
export default Post;
