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
import EIcons from 'react-native-vector-icons/Entypo'
import AIcons from 'react-native-vector-icons/AntDesign'
import Wishlist from '../screens/Whishlist/index'
import Explorenavigator from '../navigation/Explorenavigator'
import Profilescreen from '../screens/ProfilePage/index'
import Logout from "../screens/ProfilePage/Logout";
const Tab = createBottomTabNavigator(
  
);
const Hometabnavigator = () => {
  return (
    <Tab.Navigator
  
      tabBarOptions={{ activeTintColor: "#f15454", inactiveTintColor: "grey"}}>
      <Tab.Screen 
        name={"Home"}
        component={Explorenavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FeatherIcon name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Saved"}
        component={Wishlist}
        options={{
          tabBarIcon: ({ color }) => (
            <EIcons name="heart-outlined" size={25} color={color} />
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
        name={"Message"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
<FeatherIcon name="message-square" size={25} color={color}/>
            ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Logout}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
          <AIcons name="profile" size={25} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Hometabnavigator;
