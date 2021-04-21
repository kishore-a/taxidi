import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home/index";
import FIcon from "react-native-vector-icons/Fontisto";
import { color } from "react-native-reanimated";
import DestinationSearch from "../screens/DestinationSearch";
import Guestpage from "../screens/Guest";
import Searchresults from "../screens/Searchresults";
import FeatherIcon from "react-native-vector-icons/Feather";
import FAIcons from "react-native-vector-icons/FontAwesome5";
import Iicons from "react-native-vector-icons/Ionicons";
import SIcons from 'react-native-vector-icons/SimpleLineIcons'
const Tab = createBottomTabNavigator();
const Hometabnavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: "#f15454", inactiveTintColor: "grey" }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Search"}
        component={DestinationSearch}
        options={{
          tabBarIcon: ({ color }) => (
            <FIcon name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Taxidi"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FAIcons name="airbnb" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"Guest"}
        component={Guestpage}
        options={{
          tabBarIcon: ({ color }) => (
            <SIcons name="people" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Search Result"}
        component={Searchresults}
        options={{
          title: "Destination",
          tabBarIcon: ({ color }) => (
            <Iicons
              name="md-location-outline"
              size={25}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Hometabnavigator;
