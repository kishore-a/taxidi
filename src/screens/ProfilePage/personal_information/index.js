import React from "react";
import {useState,useEffect} from "react";
import { View, Text, Image, TouchableOpacity, Dimensions ,} from "react-native";
import { Auth } from "aws-amplify";
const width = Dimensions.get("screen").width;
const fun= async()=>{
Auth.signOut();
}

const PersonalInfo = () => {
  const [name, setname] = useState(null)
  useEffect(() => {
    async function fetchMyAPI() {
      let name=await Auth.currentUserInfo();
      const final=name.username;
      setname(final)
    }

    fetchMyAPI()
  }, [])
  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 60,
            marginLeft: 30,
            alignItems: "center",
          }}
        >
          <View>
            <Image
              source={require("../../../../assets/image/DP.png")}
              style={{ width: 80, height: 80, borderRadius: 60 }}
            />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>{name}</Text>
            <Text style={{ color: "red" }}>View Profile</Text>
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center" ,marginTop:670}}>
        <TouchableOpacity
          style={{
            width: width - 5,
            height: 40,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={fun}
        >
          <Text style={{ fontSize: 25, color: "white" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalInfo;
