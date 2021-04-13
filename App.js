import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/Home/index";
import Posts from './src/components/posts/index'

export default function App() {
  return (
    <>
      <SafeAreaView>
        {/* <HomeScreen /> */}
        
          <Posts />
          
      </SafeAreaView>
    </>
  );
}
