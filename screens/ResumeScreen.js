import React from 'react'
// This allows scrolling of the application
import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Reviews from '../components/Reviews';





function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}




export default function ResumeScreen() {
  return (


    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#2C66FF", padding: 40 }}>
      <Header style={{ background: "blue", flex: 1 }} />
      <SearchBar />
      </View>
      
        <View style={{ 
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'grey',
          padding: 20
          }}>
            {/* This is the background of the main resume */}
            <View style={{
            backgroundColor: "black", 
            padding: 20, 
            height: 200, 
            width: 350, 
            opacity: .60,
            borderRadius: 8/1,
            flex : 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            
            }}>

              {/* Enable scrolling within the certificate */}
              <ScrollView>
              {/* ROW 1: Taskcloud Header Image */}
              <View style = {{
                backgroundColor: 'red'
              }}>
                <Text style={{ fontSize: 40}}>TaskCloud Header Image</Text>
              </View>
              

              {/* ROW 2: Person Details, Ratings, names, age and profile pic */}

              <View style = {{
                backgroundColor: 'green'
              }}>
                <Text style={{ fontSize: 40 }}>Person Details, Ratings, names, age and profile pic</Text>
              </View>

              {/* ROW 3: Tasks Completed: Number, Date Joined: Date */}
              <View style = {{
                backgroundColor: 'blue'
              }}>
                <Text style={{ fontSize: 15 }}>Tasks Completed: 48</Text>
                <Text style={{ fontSize: 15 }}>Date Joined: 03/06/2022</Text>
              </View>
              

              {/* ROW 4: Details of reviews of companies the user had worked at */}
              <View style = {{
                backgroundColor: 'orange'
              }}>
                {/* Actual Review display code */}
                <Reviews />
              </View>
              </ScrollView>



            </View>
        </View>
      
      {/* This is the background of the resume page */}


    </SafeAreaView>
  )
}


