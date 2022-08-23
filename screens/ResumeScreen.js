import React from 'react'
// This allows scrolling of the application
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, Dimensions} from 'react-native'
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Reviews from '../components/Reviews';


// importing stuff for star ratings
import {FontAwesome} from "@expo/vector-icons"



export default function ResumeScreen() {
  return (


    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#2C66FF", padding: 40 }}>
      {/* TaskCloud Header */}
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
            {/* This is the background of the main resume */}
            <View style={{
            backgroundColor: "#888888", 
            padding: 20, 
            height: 200, 
            width: 350, 
            borderRadius: 8/1,
            flex : 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            
            }}>
              <ScrollView 
              horizontal = {false} 
              showsVerticalScrollIndicator={true} 
              scalesPageToFit={true}
              bounces={false}
              width={"100%"}>
                {/* ROW 1: Taskcloud Header Image */}
                <View style={{flexDirection:"row", paddingBottom: 10, width:"100%"}}>
                  <Image source= {require("../assets/images/TaskCloud-Icon.png")} style = {{
                      width: 80,
                      height: 60,
                      resizeMode: "contain"}}/>
                  <Text style={{ fontSize: 35, color: 'white', padding: 5}}>TaskCloud</Text>
                </View>

                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 3}} />
                

                  {/* ROW 2: Person Details, Ratings, names, age and profile pic */}

                  <View style = {{
                    display: 'flex', 
                    flexDirection: 'row'
                    }}>
                    {/* Left Column: Image of user*/}
                    <View style = {{padding: 10}}>
                      <Image source= {require("../assets/images/User-Pic-Icon.png")} style = {{
                        width: 70,
                        height: 70,
                        resizeMode: "contain"}}/> 
                    </View>

                    {/* Right Column: Name, age and ratings of user*/}
                    <View style = {{paddingLeft: '7%', paddingTop: '8%'}}>
                      {/* Name and age of the person */}
                      <View><Text style={{ fontSize: 20, color: 'white' }}>John Doe, 15</Text></View>
                      <View style={{flexDirection:"row"}}>
                        
                        {/* Shows 4 stars out of 5 stars */}
                        <FontAwesome name="star" color={'yellow'} size={15} style={{marginHorizontal: 3}}></FontAwesome>
                        <FontAwesome name="star" color={'yellow'} size={15} style={{marginHorizontal: 3}}></FontAwesome>
                        <FontAwesome name="star" color={'yellow'} size={15} style={{marginHorizontal: 3}}></FontAwesome>
                        <FontAwesome name="star" color={'yellow'} size={15} style={{marginHorizontal: 3}}></FontAwesome>
                        <FontAwesome name="star" color={'white'} size={15} style={{marginHorizontal: 3}}></FontAwesome>
                        <Text style={{ fontSize: 12, color: 'white'}}> 4.0</Text> 
                      </View>
                      
                    </View>
                    
                  </View>

                  {/* ROW 3: Tasks Completed: Number, Date Joined: Date */}
                  <View style = {{paddingVertical: 8}}>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Tasks Completed: 48</Text>
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Date Joined: 03/06/2022</Text>
                  </View>
                

                {/* ROW 4: Details of reviews of companies the user had worked at */}
                <Reviews />

                <View style={{paddingVertical: Dimensions.get('window').width * .1}}/>

                </ScrollView>
            </View>
        </View>
      
      {/* This is the background of the resume page */}


    </SafeAreaView>
  )
}


