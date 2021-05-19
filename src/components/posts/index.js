import React from "react";
import { FlatList, Pressable } from "react-native";
import Post from "./image/index";
import feed from '../../../assets/data/feed'
import {useEffect,useState} from 'react'
import {listPosts} from '../../graphql/queries'
import {API,graphqlOperation} from 'aws-amplify'


const Posts = () => {
  const [sPosts, setsPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const postresult=await API.graphql(graphqlOperation(listPosts))
        setsPosts(postresult.data.listPosts.items)
        console.log(setsPosts)
      }
      catch (err){
        console.log(err.message)
      }
  
    }
    fetchPosts()
  }, [])
  return (

       <FlatList
      data={feed}
      // key={feed.id}
      renderItem={({ item }) => <Post item={item} />}
    />
   
  );
};
export default Posts;
//This component renders the post that comes in the searchresult screen.Data is provided by the feed data.