import { View, Text, SafeAreaView, Button} from 'react-native'
import React from 'react'
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";


import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

export default function ProfileScreen({navigation}) {
  return (

    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#2C66FF", padding: 40 }}>
        <Header style={{ background: "blue", flex: 1 }} />
        <SearchBar />
      </View>
      <Text>
        ProfileScreen
      </Text>

      
      {/* Button Leading to GPS Screen */}

      <Button
        title="Location Tracking Page"
        onPress={() => navigation.navigate('Gps')}
        //onPress={() => navigation.navigate('Test123')}

      />


    </SafeAreaView>
  )
}






