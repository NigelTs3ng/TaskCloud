import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#2C66FF", padding: 40 }}>
        <Header style={{ background: "blue", flex: 1 }} />
        <SearchBar />
      </View>
      <Text>
        ProfileScreen (INSERT BUTTON LEADING TO LOCATION TRACKING SCREEN HERE)
      </Text>
    </SafeAreaView>
  )
}