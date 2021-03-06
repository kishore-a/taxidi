import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Live_anywhere from '../../../src/components/Image/index'
import feed from '../../../assets/data/feed1'
// const stay = [
//   {
//     id: '1',
//     Image: "https://images.pexels.com/photos/3875090/pexels-photo-3875090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     Title: "Entire Home",
//   },
//   {
//     id: '2',
//     Image: "https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     Title: "Farm House",
//   },
//   { id:'3',
//     Image: "https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     Title: "Unique Home",
//   },
//   { id:'4',
//     Image: "https://images.pexels.com/photos/5749136/pexels-photo-5749136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     Title: "Pet Friendly Home",
//   },
// ];

const Live=()=> {
  return (
<FlatList
style={{marginBottom:20}}
data={feed}
// key={stay.id}
horizontal={true}
showsHorizontalScrollIndicator={false}
renderItem={({item}) =><Live_anywhere item={item}/>}
/>
  );
}
export default Live;
//This component renders the Live anyhwere scrollable component in the Home Screen.The data comes from the feed1