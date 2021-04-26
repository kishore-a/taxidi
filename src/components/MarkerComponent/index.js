import React from 'react'
import { View, Text } from 'react-native'
import {Marker } from 'react-native-maps'
const Markercomponent = (props) => {
    const {coordinate,price,onPress,isSelected}=props;
    return (
        <Marker
        onPress={onPress}
        coordinate={coordinate}
      >
        <View
          style={{
            backgroundColor:isSelected?'black':'white' ,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderColor: "black",
            borderWidth: 0.5,
            padding: 5,
          }}
        >
          <Text style={{ fontWeight: "bold",color:isSelected?'white':'black' }}>${price}</Text>
        </View>
      </Marker>
    )
}

export default Markercomponent;
