import React from "react";
import { View, Text, Image,useWindowDimensions } from "react-native";
import Ficons from "react-native-vector-icons/FontAwesome";

const PostCarousel = ({ item }) => {
  const image_path={uri:item.Image};
  const location=item.Place;
  const rating=item.rating;
  const numberofpeoplerated=item.number_of_people_rated;
  const house_type=item.house_type;
  const description=item.House_description;
  const before_price=item.before_price;
  const price=item.after_price;
  const width=useWindowDimensions().width;
  return (
    <View style={{ alignItems: "center", marginTop: 30,flexDirection: "row" ,backgroundColor:'white',borderRadius:15,width:width-65,marginRight:20,shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,}}>
      <Image
        source={image_path}
        style={{
          // width:'100%',
          height: 120,
          resizeMode:'cover',
          aspectRatio:1,
          borderRadius: 15,
        }}
      />
      <View style={{flex:1}}>

      <View style={{ alignSelf: "flex-start", marginLeft: 20 ,}}>
        <Text style={{ fontSize: 15, fontWeight: "900",marginBottom:6 }}>
          {house_type}{" - "}{location}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "900" ,marginBottom:6}}>
{description}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              textDecorationLine: "line-through",
              fontSize: 15,
              color: "grey",
            }}
          >
            {"$"}{before_price}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
            {" "}
            {"$"}{price}
          </Text>
          <Text style={{ fontSize: 15 }}> / night</Text>
        </View>
      </View>
      </View>
      
    </View>
  );
};
export default PostCarousel;
