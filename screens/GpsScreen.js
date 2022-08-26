import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchBar from "../components/SearchBar";

import Tabs from '../components/Tab';
import GpsTracker from '../components/GpsTracker';


export default function GpsScreen({navigation}) {
  return (
    // 
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      {/* Header for the application */}
      <View style={{ backgroundColor: "#2C66FF", padding: 20}}>
        {/* Home Button */}
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

      {/* Back Button */}
      <Pressable 
        // Button Styling
        style={({ pressed }) => [
          {
            backgroundColor: pressed
            // On press, background color will be
              ? '#0080ff'
            // On release, background color will be
              : 'blue'
          },
          buttonStyles.backButton          
        ]}
        // Button Navigation
        onPress={() => navigation.goBack()}>
          {/* Button Text */}
          <Text style={buttonStyles.text}>Back</Text>
      
      </Pressable>
    

    <View style={{ 
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 20
          }}>
            {/* GPS BACKGROUND */}
            <View style={{
            backgroundColor: "black",
            opacity: .75,
            padding: 20, 
            height: 200, 
            width: "110%", 
            borderRadius: 8/1,
            flex : 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            }}>                          
              {/* Actual Display of the GPS Screen */}
              <GpsTracker style={{      
                width: Dimensions.get('window').width / 1.2,
                height: Dimensions.get('window').height / 1.95                
                }}>
              </GpsTracker>
              
            </View>
            
        </View>

        
    </SafeAreaView>

  )
}





/*------------------------Button Styling--------------------------------*/
const buttonStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    margin: 5,
    borderWidth: 1
  }
});



