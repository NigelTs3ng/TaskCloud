import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react';

export default function ListingCard({item}) {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      border: 1,
      borderRadius: 25,
      marginRight: 30,
    },

    listing: {
      fontFamily: "Helvetica",
      alignItems: "center",
    },

    icon: {
      width: 50, 
      height: 40, 
      resizeMode: "contain" 
    }
  })