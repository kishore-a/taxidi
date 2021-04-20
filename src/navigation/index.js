// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
// import React from "react";
// import {NavigationContainer} from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from '../screens/Home/index'
// import Searchresults from '../screens/Searchresults/index'
// import DestinationSearchScreen from "../screens/DestinationSearch";
// // import GuestsScreen from "../screens/Guests";

// // import HomeTabNavigator from "./HomeTabNavigator";

// const Stack = createStackNavigator();

// const Router = (props) => {

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name={"Search results"}
//           component={Searchresults}
//         />

//         {/* <Stack.Screen
//           name={"Destination Search"}
//           component={DestinationSearchScreen}
//           options={{
//             title: "Search your destination"
//           }}
//         />

//         <Stack.Screen
//           name={"Guests"}
//           component={GuestsScreen}
//           options={{
//             title: "How many people?"
//           }}
//         /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Router;