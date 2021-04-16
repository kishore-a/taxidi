import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/Home/index";
import Searchresults from "./src/screens/Searchresults/index";
import DestinationSearch from './src/screens/DestinationSearch/index'
import GuestPage from './src/screens/Guest/index'
export default function App() {
  return (
    <>
      <SafeAreaView style={null}>
        {/* <HomeScreen /> */}

        {/* <Searchresults /> */}
        {/* <DestinationSearch/> */}
        <GuestPage/>
      </SafeAreaView>
    </>
  );
}
