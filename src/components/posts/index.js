import React from "react";
import { FlatList } from "react-native";
import Post from "./image/index";
import feed from '../../../assets/image/Airbnb Assets/Airbnb Assets/feed'

const Posts = () => {
  return (
    <FlatList
      data={feed}
      // key={feed.id}
      renderItem={({ item }) => <Post item={item} />}
    />
  );
};
export default Posts;