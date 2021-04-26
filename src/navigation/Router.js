import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/index";
import Searchresults from "../screens/Searchresults/index";
import DestinationSearchScreen from "../screens/DestinationSearch";
import GuestScreen from "../screens/Guest/index";
import Hometabnavigator from "../navigation/Hometabnavigator";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={Hometabnavigator}
          options={{
            headerShown: false,
            //   // title:'Home',
          }}
        />

        <Stack.Screen
          name={"destination"}
          component={DestinationSearchScreen}
          options={{
            headerTitleStyle: { alignSelf: "center", textAlign: "center" },
            headerShown: true,
            title: "Search your destination",
          }}
        />

        <Stack.Screen
          name={"Guests"}
          component={GuestScreen}
          options={{
            title: "How many people?",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
