import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchBar from "../components/SearchBar";

import Tabs from '../components/Tab';
import GpsTracker from '../components/GpsTracker';


export default function GpsScreen() {
  return (
    // 
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
    <View style={{ backgroundColor: "#2C66FF", padding: 40 }}>
      {/* Header for the application */}
      <Header style={{ background: "blue", flex: 1 }} />
      <SearchBar />
    </View>

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