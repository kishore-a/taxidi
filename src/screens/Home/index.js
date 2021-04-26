import React from "react";
import { useFonts } from "expo-font";
import Live from "../../../src/components/scrollable1/index";
import { ScrollView } from "react-native";
import Scrollable2 from "../../components/scrollable2/index";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Dimensions,
  TextInput,
} from "react-native";
import styles from "./styles";
import Aicons from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [Location, setLocation] = useState("");
  const path = "../../../assets/image/wallpaper.jpg";
  return (
    <View>
      <ScrollView>
        <ImageBackground source={require(path)} style={styles.image}>
          <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
              <Pressable
                onPress={() => navigation.navigate('destination')}
                style={{
                  backgroundColor: "white",
                  width: Dimensions.get("screen").width - 20,
                  height: 50,
                  borderRadius: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={{flexDirection: "row" ,alignItems:'center'}}>
                  <Aicons name="search1" size={20} color={"#fc0356"}style={{marginRight:10}}/>

                  <TextInput
                    onChangeText={setLocation}
                    value={Location}
                    placeholder="Where are You Going?"
                    style={{ fontSize: 16, fontWeight: "bold", flexShrink: 1 }}
                  ></TextInput>
                </View>
              </Pressable>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 90,
                  width: "50%",
                  // fontFamily:'Montserrat-Light'

                  
                }}
              >
                Go Near
              </Text>
              <Pressable
                onPress={() => navigation.navigate("destination")}
                style={{
                  marginLeft: 6,
                  backgroundColor: "white",
                  height: 40,
                  width: 200,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  // fontFamily:'Montserrat_Medium'
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {" "}
                  Explore nearby places
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
        <View style={{ margin: 30 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 }}>
            Live Anywhere
          </Text>

          <Live />
          <View>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                marginTop: 10,
                marginBottom: 20,
              }}
            >
              Explore Nearby
            </Text>
            <Scrollable2 />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
