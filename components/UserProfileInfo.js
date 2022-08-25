import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'


export default function UserProfileInfo() {
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

        {/* Right Column: Name, age and ratings of user*/}
        <View style = {{padding: 10}}>
          
          {/* Username Details */}
          <View style={{flexDirection:"row"}}>
            <Text style={{ fontSize: 18, color: 'white',  fontWeight: "bold"}}>Username: </Text>
            <Text style={{ fontSize: 18, color: 'white' }}>roadster29</Text>
          </View>

          {/* Name Details */}
          <View style={{flexDirection:"row"}}>
            <Text style={{ fontSize: 18, color: 'white',  fontWeight: "bold"}}>Name: </Text>
            <Text style={{ fontSize: 18, color: 'white' }}>Jane Doe</Text>
          </View>

          {/* Amount of money earnt */}
          <View style={{flexDirection:"row"}}>
            <Text style={{ fontSize: 18, color: 'white',  fontWeight: "bold"}}>Amount Earned: </Text>
              <Text style={{ fontSize: 18, color: 'white'}}>$260</Text>
          </View>
        </View>
      </View>


  );

}