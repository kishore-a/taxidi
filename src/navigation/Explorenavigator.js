import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/index";
import Searchresults from '../screens/Searchresults/index'
import Searchresultnavigator from "./Searchresultnavigator";
const Explorenavigator = () => {
  const Tab = createStackNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name={"Home"} component={HomeScreen} options={{headerShown:false}}/>

      <Tab.Screen name={'Searchresult'} component={Searchresultnavigator}/>
    </Tab.Navigator>
  );
};

export default Explorenavigator;
