import React from 'react'
import {Auth} from 'aws-amplify'
import { View, Text, Pressable,Dimensions } from 'react-native'

const Logout = () => {
    const logout =()=>{
        Auth.signOut()
    }

    return (
        <Pressable style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:100,backgroundColor:'grey',padding:10}} onPress={logout}>
            <Text style={{color:'white'}}>Logout</Text>
        </Pressable>
    )
}

export default Logout;
