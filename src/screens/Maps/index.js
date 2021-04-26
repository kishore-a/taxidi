import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Markercomponent from "../../components/MarkerComponent";
import {useState} from 'react'
import places from '.././../../assets/data/feed'

const Mapspage = () => {
const [selectedPlaceid, setselectedPlaceid] = useState(null)
    return (
    <View>
      <MapView
        style={{ height: "100%", width: "100%" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 13.0056966,
          longitude: 80.2476796,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
       {places.map(place => (<Markercomponent 
       coordinate={place.coordinates} 
       price={place.after_price}
       isSelected={place.id===selectedPlaceid}
       onPress={() => setselectedPlaceid(place.id)}
       />))}
      </MapView>
    </View>
  );
};

export default Mapspage;
