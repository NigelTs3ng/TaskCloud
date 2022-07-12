import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={{flexDirection: "row", alignSelf: "center"}}>
      <HeaderButton text="TaskCloud"/>
    </View>
  )
}

const HeaderButton = (props) => (
      <TouchableOpacity
       style={{
        backgroundColor: "blue",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
       }}
      >
       <Text style={{ color: "white" }}>{props.text}</Text>
      </TouchableOpacity>
);