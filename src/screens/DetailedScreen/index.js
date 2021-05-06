import React from 'react'
import { View, Text } from 'react-native'
import Detailedpost from './Detailedpost/index'
import feed from '../../../assets/data/feed'
import {useRoute} from '@react-navigation/native'


const DetailedScreen = () => {
    const route=useRoute();
    const post=feed.find(item=>item.id===route.params.postId)
    return (
        <View>
            <Detailedpost item={post}/>
        </View>
    )
}

export default DetailedScreen;
