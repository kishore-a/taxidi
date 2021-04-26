import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Searchresults from "../screens/Searchresults";
import Mapspage from "../screens/Maps/index";
import { NavigationContainer } from "@react-navigation/native";
const Searchresultnavigator = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#f15454",
          indicatorStyle: {
            backgroundColor: "#f15454",
          },
        }}
      >
        <Tab.Screen name={"List"} component={Searchresults} />
        <Tab.Screen name={"Map"} component={Mapspage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Searchresultnavigator;
