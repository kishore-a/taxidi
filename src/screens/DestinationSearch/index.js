import React from "react";
import { View, TextInput, FlatList, Text, Pressable } from "react-native";
import feed from "../../../assets/data/search_data";
import Iicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import Suggestionpage from './Suggestionpage'

const DestinationSearch = () => {
  const [value, setinputtext] = React.useState("");
  const navigation = useNavigation();


  return (
    <View
      style={{
        marginHorizontal: "5%",


      }}
    >
      <View style={{height:1000,marginTop:20}}>
      <GooglePlacesAutocomplete
      styles={{marginTop:30,textInput:{
        fontSize:20
      }}}
    isRowScrollable={true}
      placeholder='Where are you going?'
      showPoweredLogo={false}
      onPress={(data, details = null) => {
   navigation.navigate('Guests')
      }}
      query={{
        // key: 'AIzaSyB5Q8Hq1jDLlTzovNp7CAKV4kN9oSSXsQk',
        key: 'AIzaSyDCY18aKft1CfPzYNUrMFWiYaJ8IKI9OK0',
        language: 'en',
        types:'(cities)'
      }}
    
      
      suppressDefaultStyles
renderRow={(item)=><Suggestionpage item={item}/>}    />
      </View>
    
      
    </View>
  
  );
};
export default DestinationSearch;
