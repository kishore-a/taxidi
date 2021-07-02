import React from "react";
import PersonalInfo from "./personal_information";
import { View, Text } from "react-native";
import Logout from "./Logout/index";
const ProfileScreen = () => {
  return (
    <View>
      <PersonalInfo />

      {/* <Logout /> */}
    </View>
  );
};

export default ProfileScreen;
