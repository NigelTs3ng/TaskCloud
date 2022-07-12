import { View, Text, Image, ScrollView } from 'react-native'
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
    paddingVertical: 10,
    paddingLeft: 30,
   }}
   >
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     {items.map((item, index) => (
      <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
        <Image 
         source={item.image}
         style={{ 
          width: 50, 
          height: 40, 
          resizeMode: "contain" }} 
        />
        <Text>{item.text}</Text>
      </View>
     ))}
    </ScrollView>
    </View>
  );

}