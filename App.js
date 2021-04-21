import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, View, Text } from "react-native";
import HomeScreen from "./src/screens/Home/index";
import Searchresults from "./src/screens/Searchresults/index";
import DestinationSearch from "./src/screens/DestinationSearch/index";
import GuestPage from "./src/screens/Guest/index";
import Router from "./src/navigation/Router";

export default function App() {
  return (
    <View style={{ width: "100%", height: "100%" }}>

      <Router />
    </View>
  );
}
