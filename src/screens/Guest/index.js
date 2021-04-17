import React from "react";
import { View, Text } from "react-native";
import Guest from "../../components/guest/index";
const Guestpage = () => {
  return (
    <View>
      <View style={{marginTop:40}}>
        <Guest Age="Adult" description="Age 13 aor above" />
      </View>

    </View>

  );
};
export default Guestpage;
