import React from "react";
import { Auth } from "aws-amplify";
import { View, Text, Pressable, Dimensions } from "react-native";

const Logout = () => {
  const logout = () => {
    Auth.signOut();
  };

  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <Pressable
        style={{
          width: 100,
          marginTop: 100,
          backgroundColor: "grey",
          padding: 10,
        }}
        onPress={Logout}
      >
        <Text style={{ textAlign:'center',color: "white", fontWeight: "bold", fontSize: 20 }}>
          Logout
        </Text>
      </Pressable>
    </View>
  );
};

export default Logout;
