import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable
} from "react-native";
import React from "react";
import Header from "../components/Header";
import listingPicture from "../assets/images/listingPic.png";
import Description from "../assets/images/description.png";
import { Dimensions } from "react-native";

export default function ListingScreen({navigation}) {
  return (
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

      <View
        style={{
          alignItems: "center",
          flexDirection: "column",
          flex: 1,
          width: "100%",
          alignSelf: "center"
        }}
      >
        <Image
          source={listingPicture}
          style={{
            flexDirection: "column",
            flex: 1,
            width: "100%",
            height: Dimensions.get("window").height,
            alignSelf: "center"
          }}
        ></Image>

      <Image
        source={Description}
        style={{
          flexDirection: "column",
          flex: 1,
          paddingTop: 10,
          width: "100%",
          height: Dimensions.get("window").height,
          alignSelf: "center"
        }}
      ></Image>
      </View>
    </SafeAreaView>
  );
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