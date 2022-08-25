import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'


export default function ParentProfileInfo() {
  return (
    <View style = {{
        display: 'flex', 
        flexDirection: 'row',
        backgroundColor: 'black',
        opacity: 0.7,
        borderRadius: 10,
        margin: 5,
        }}>
        {/* Left Column: Image of user*/}
        <View style = {{padding: 10}}>
          <Image source= {require("../assets/images/User-Pic-Icon.png")} style = {{
            width: 80,
            height: 80,
            resizeMode: "contain"}}/> 
        </View>

        <View style = {{padding: 20}}>
          
          {/* Username Details */}
          <View style={{flexDirection:"row"}}>
            <Text style={{ fontSize: 18, color: 'white',  fontWeight: "bold"}}>Username: </Text>
            <Text style={{ fontSize: 18, color: 'white' }}>qwerty123</Text>
          </View>

          {/* Name Details */}
          <View style={{flexDirection:"row"}}>
            <Text style={{ fontSize: 18, color: 'white',  fontWeight: "bold"}}>Name: </Text>
            <Text style={{ fontSize: 18, color: 'white' }}>Edward Doe</Text>
          </View>
        </View>
      </View>


  );

}