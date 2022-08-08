import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const items = [
  {
    id: 1,
    image: require("../assets/images/chef-icon.png"),
    text: "Kim's Bakery",
    text2: "Are you able to make it tomorrow?"
  },

  {
    id: 2,
    image: require("../assets/images/programming-icon.png"),
    text: "Rolotech Pte. Ltd.",
    text2: "What are some projects you worked on?"
  },

  {
    id: 3,
    image: require("../assets/images/tutor-icon.png"),
    text: "Tutoring Assistant",
    text2: "Yes, the money has been deposited!"
  },

  {
    id: 4,
    image: require("../assets/images/doctor-icon.png"),
    text: "Healthcare Assistant",
    text2: "Yes, we have vacancies at the moment!"
  },
]

export default function TextItems() {
  return (
    <ScrollView>  
      {items.map((item) => {
        return (
          <View style={styles.listingBox}>
            <Image 
              source={item.image}
              style={styles.icon} 
            />
            <View>
              <Text style={styles.listingText}>{item.text}</Text>
              <Text>{item.text2}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

/*------------------------Styling--------------------------------*/
const styles = StyleSheet.create({
  listingBox: {
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    borderWidth: 1,
    margin: 5,
    padding: 8,
    flexDirection: "row", 
    alignItems: "center",
  },

  icon: {
    width: 70, 
    height: 60, 
    resizeMode: "contain" 
  },

  listingText: {
    fontWeight: "bold",
    flexDirection: "row",
    bottom: 8
  },

})