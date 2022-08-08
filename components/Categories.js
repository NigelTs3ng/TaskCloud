import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const items = [
  {
    image: require("../assets/images/chef-icon.png"),
    text: "Kitchen",
  },

  {
    image: require("../assets/images/programming-icon.png"),
    text: "Coding",
  },

  {
    image: require("../assets/images/tutor-icon.png"),
    text: "Tutoring",
  },

  {
    image: require("../assets/images/doctor-icon.png"),
    text: "Healthcare",
  },

]

export default function Categories() {
  return (
   <View
   style={{ 
    marginTop: 5,
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingLeft: 30,
    outlineWeight: 100,
   }}
   >
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     {items.map((item, index) => (
      <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
        <TouchableOpacity>
          <Image 
          source={item.image}
          style={{ 
            width: 50, 
            height: 40, 
            resizeMode: "contain" }} 
          />
        </TouchableOpacity>
        <Text>{item.text}</Text>
      </View>
     ))}
    </ScrollView>
    </View>
  );

}