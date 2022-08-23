import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar'
import TextItems from '../components/TextItems'


import { TouchableOpacity } from "react-native";

export default function AllChatScreen({navigation}) {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1}}>
      <View style={{ backgroundColor: "#2C66FF", padding: 20 }}>
        <TouchableOpacity
          style=
          {{
            backgroundColor: "#2C66FF",
            paddingVertical: 4,
            paddingHorizontal: 16,
            borderRadius: 30,
            // Ensures TaskCloud Logo is Centred
            alignSelf: 'center'
          }}
          onPress={() => navigation.navigate("Home")}>
         <Header style={{ background: 'blue', flex: 1}}/>
        </TouchableOpacity>
      </View>
         {/* <SearchBar /> */}
         <TextItems />
    </SafeAreaView>
  )
}