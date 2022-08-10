import { View, Text, SafeAreaView } from 'react-native'
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import React from 'react'

export default function ResumeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#2C66FF", padding: 40 }}>
      <Header style={{ background: "blue", flex: 1 }} />
      <SearchBar />
      </View>
    <Text>
      Insert Resume Here
    </Text>

    </SafeAreaView>

  )
}