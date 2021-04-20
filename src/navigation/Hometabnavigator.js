import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home/index'
const Tab=createBottomTabNavigator;
const HomeTabNavigator = () => {

    return (
        <Tab.Navigator>
            <Tab.screen name={'Home'} component={HomeScreen}/>
        </Tab.Navigator>
    )
}

export default HomeTabNavigator;
