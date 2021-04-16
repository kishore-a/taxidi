import React from "react";
import { View, Text } from "react-native";

const Guestpage = () => {
  return (
    <View
      style={{
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text> Adults</Text>
        <Text>Ages 13 or above</Text>
      </View>
      <View style={{ flexDirection: "row", marginRight: 20,}}>
        <View style={{ borderWidth: 0.5, borderColor:'black',borderRadius:45,marginRight:20}}>
          <Text style={{fontSize:30}}>-</Text>
        </View>
        <Text>0</Text>
        <Text>+</Text>
      </View>
    </View>
  );
};
export default Guestpage;
