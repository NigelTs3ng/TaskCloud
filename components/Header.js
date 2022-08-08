import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={{flexDirection: "row", alignSelf: "center"}}>
      <HeaderButton text="Task Cloud"/>
    </View>
  )
}

const HeaderButton = (props) => (
      <TouchableOpacity
       style={{
        backgroundColor: "#2C66FF",
        paddingVertical: 6, 
        paddingHorizontal: 16,
        borderRadius: 30,
       }}
      >
       <Text style={{ color: "white", fontSize: 30, fontWeight: "bold"}}>{props.text}</Text>
      </TouchableOpacity>
);