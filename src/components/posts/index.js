import React from "react";
import { FlatList, Pressable } from "react-native";
import Post from "./image/index";
import feed from '../../../assets/data/feed'

const Posts = () => {
  return (
    <Pressable
    > 
       <FlatList
      data={feed}
      // key={feed.id}
      renderItem={({ item }) => <Post item={item} />}
    />
    </Pressable>
   
  );
};
export default Posts;
//This component renders the post that comes in the searchresult screen.Data is provided by the feed data.