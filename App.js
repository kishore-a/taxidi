import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/Home/index";

export default function App() {
  return (
    <>
      <SafeAreaView>
        <HomeScreen />
     
      </SafeAreaView>
    </>
  );
}
