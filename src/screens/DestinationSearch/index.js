import React from "react";
import { View, TextInput, FlatList, Text } from "react-native";
import feed from "../../../assets/data/search_data";
import Iicons from "react-native-vector-icons/Ionicons";
const DestinationSearch = () => {
  const [value, setinputtext] = React.useState("");

  return (
    <View
      style={{
        marginVertical: "15%",
        marginHorizontal: "8%"
      }}
    >
      <TextInput
        value={value}
        placeholder="Where are you going?"
        onChangeText={setinputtext}
      />
      {/* <View
        style={{
          borderBottomColor: "lightgrey",
          borderWidth: 0.3,
          width: "100%",
        }}
      ></View> */}
      {/* <View> */}
      <FlatList
        data={feed}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 30,
              borderBottomColor: "lightgrey",
              borderBottomWidth: 0.5,
            }}
          >
            <View style={{backgroundColor:'lightgrey',marginRight:20,borderRadius:10}}>
              <Iicons name="location-sharp" size={35} />
            </View>
            <Text style={{ fontSize: 15 }}>
              {item.city}
              {","}
              {"  "}
              {item.locality}
            </Text>
          </View>
        )}
      />
    </View>
    // </View>
  );
};
export default DestinationSearch;
