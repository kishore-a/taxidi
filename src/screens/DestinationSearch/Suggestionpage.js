import React from "react";
import { View, Text, ScrollView } from "react-native";
import Iicons from "react-native-vector-icons/Ionicons";
const Suggestionpage = ({ item }) => {
  console.log(item);
  return (
   
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
          borderBottomColor: "lightgrey",
          borderBottomWidth: 0.5,
          marginTop: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "lightgrey",
            marginRight: 20,
            borderRadius: 10,
            marginBottom: 20,
          }}
        >
          <Iicons name="location-sharp" size={40} />
        </View>
        <Text style={{ fontSize: 15, marginBottom: 20 }}>
          {item.description}
        </Text>
      </View>
  );
};

export default Suggestionpage;
