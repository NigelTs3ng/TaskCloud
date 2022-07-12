import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ListingCard from '../components/ListingCard'

const items = [
  {
    index: 1,
    image: require("../assets/images/chef-icon.png"),
    text: "Kitchen",
  },

  {
    index: 2,
    image: require("../assets/images/programming-icon.png"),
    text: "Coding",
  },

  {
    index: 3,
    image: require("../assets/images/tutor-icon.png"),
    text: "Tutoring",
  },

  {
    index: 4,
    image: require("../assets/images/doctor-icon.png"),
    text: "Healthcare",
  },

]

export default function ListingItems() {
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      {items.map(item => { return <ListingCard item={item} />} )}
      <ListingCard style={styles.container} > </ ListingCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: "center", 
    marginRight: 30,
  }
})