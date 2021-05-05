import React from "react";
import { View, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Markercomponent from "../../components/MarkerComponent";
import { useState, useEffect, useRef } from "react";
import places from ".././../../assets/data/feed";
import PostCarousel from "../../components/posts/PostCarousel";
import { FlatList } from "react-native-gesture-handler";

const Mapspage = () => {
  const flatlist = useRef();
  const viewableconfig = useRef({ itemVisiblePercentThreshold: 90 });
  const onviewchanged = useRef(({ viewableableItem }) => {
    console.log(viewableableItem);
  });
  const [selectedPlaceid, setselectedPlaceid] = useState(null);
  useEffect(() => {
    if (!selectedPlaceid) {
      return;
    }
    const index = places.findIndex((place) => place.id === selectedPlaceid);
    flatlist.current.scrollToIndex({ index });
  }, [selectedPlaceid]);
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
        {places.map((place) => (
          <Markercomponent
            coordinate={place.coordinates}
            price={place.after_price}
            isSelected={place.id === selectedPlaceid}
            onPress={() => setselectedPlaceid(place.id)}
          />
        ))}
      </MapView>
      <View style={{ position: "absolute", bottom: 20, left: 15 }}>
        <FlatList
          ref={flatlist}
          key={places.id}
          data={places}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          snapToInterval={400 - 60}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <PostCarousel item={item} />}
          onViewableItemsChanged={onviewchanged.current}
        />
      </View>
    </View>
  );
};

export default Mapspage;
