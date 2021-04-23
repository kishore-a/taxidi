import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const Wishlist = () => {
  return (
    <SafeAreaView>
      <View style={{ marginTop: 80,marginLeft:15,marginRight:15 }}>
        <View>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Wishlists</Text>
        </View>
        <View style={{marginTop:20}}>
          <Text style={{fontSize:17,fontWeight:'200'}}>
            Collect Places to stay and things to do by tapping the heart icon.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wishlist;
