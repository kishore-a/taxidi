import React from "react";
import { useFonts } from 'expo-font';
import Live from '../../../src/components/scrollable1/index'
import {ScrollView } from 'react-native';
import Scrollable2 from '../../components/scrollable2/index'
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  Button,
  Pressable,
  Dimensions,
} from "react-native";
import styles from "./styles";
import Aicons from "react-native-vector-icons/AntDesign";
const HomeScreen = () => {
  const [loaded] = useFonts({
    Montserrat: require('../../../assets/fonts/Montserrat_Medium.ttf'),///home/kishore/React/taxidi/assets/fonts/
  });
  if (!loaded) {
    return null;
  }
  const path = "../../../assets/image/wallpaper.jpg"
  return (
    <View>
      <ScrollView>
      <ImageBackground
        source={require(path)}
        style={styles.image}
      >
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Pressable
              style={{
                backgroundColor: "white",
                width: Dimensions.get("screen").width - 20,
                height: 50,
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold", flexShrink: 1 }}>
                <Aicons name="search1" size={20} color={"#fc0356"} />
                {"  "}Where are you going?{" "}
              </Text>
            </Pressable>
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 90,
                width: "50%",
                fontFamily: "sans-serif",
              }}
            >
              Go Near
            </Text>
            <Pressable
              style={{
                marginLeft: 6,
                backgroundColor: "white",
                height: 40,
                width: 200,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={null}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {" "}
                Explore nearby places
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
      <View style={{margin:30}}>
        <Text style={{fontSize:30,fontWeight:'bold',marginBottom:20}}>Live Anywhere</Text>
        {/* <Live_anywhere/> */}
        <Live/>

        <View >
          
          <Text style={{fontSize:30,fontWeight:'bold',marginTop:20,marginBottom:20}}>
            Explore Nearby
          </Text>
          <Scrollable2/>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
