import React from "react";
import { View, Text, Pressable } from "react-native";
import Guest from "../../components/guest/index";
import {useNavigation} from '@react-navigation/native'
const Guestpage = () => {
  const navigation =useNavigation();
  return (
    <View style={{justifyContent:'space-between' ,height:'100%'}}>
      <View>
        <Guest  />
      </View>
      <Pressable 
      onPress={()=>navigation.navigate('Searchresult') }
      style={{alignItems:'center',backgroundColor:'#f15454',padding:15,marginHorizontal:20,borderRadius:15, }} >
        <Text style={{color:'white', fontSize:18,fontWeight:'bold'}}>Search</Text>
      </Pressable>
    </View>
  );
};
export default Guestpage;
