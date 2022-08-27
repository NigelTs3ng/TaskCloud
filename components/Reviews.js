import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
  } from "react-native";
  import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
  
  const items = [
    {
      id: 1,
      image: require("../assets/images/Lawyer.png"),
      text: "Saul Goodman & Associates",
      text2: "View Review"
    },
  
    {
      id: 2,
      image: require("../assets/images/programming-icon.png"),
      text: "E CORP",
      text2: "View Review"
    },
  
    {
      id: 3,
      image: require("../assets/images/tutor-icon.png"),
      text: "Mr Kim Tuition Centre",
      text2: "View Review"
    },
  
    {
      id: 4,
      image: require("../assets/images/doctor-icon.png"),
      text: "Nation University Singapore",
      text2: "View Review"
    },

    {
      id: 5,
      image: require("../assets/images/baker.png"),
      text: "DJ Bakery",
      text2: "View Review"
    },

    {
      id: 6,
      image: require("../assets/images/pharmacist.png"),
      text: "Piezer Pharmaceuticals",
      text2: "View Review"
    },

    {
      id: 7,
      image: require("../assets/images/vet.png"),
      text: "Vetology Center",
      text2: "View Review"
    },

    {
      id: 8,
      image: require("../assets/images/doctor-icon.png"),
      text: "Nation University Singapore",
      text2: "View Review"
    }
  ];
  
  export default function ListingItems({ navigation }) {
    return (
      <SafeAreaView>
        {items.map((item) => {
          return (
              <View style={styles.listingBox}>
                <Image source={item.image} style={styles.icon}/>
                <View style={styles.listingRows}>
                  <Text style={styles.listingText}>{item.text}</Text>
                  <Text>{item.text2}</Text>
                </View>
              </View>
          );
        })}
      </SafeAreaView>
    );
  }
  
  /*------------------------Styling--------------------------------*/
  const styles = StyleSheet.create({
    listingBox: {
      backgroundColor: "white",
      borderRadius: 0,
      borderWidth: 1,
      margin: 1,
      flexDirection: "row",
      alignItems: "center",
      width: Dimensions.get('window').width * .8,
      height: Dimensions.get('window').width * .15
    },

    listingRows: {
      flex: 1,
      flexDirection: "column"
    },
  
    icon: {
      width: 80,
      height: 50,
      resizeMode: "contain",
    },
  
    listingText: {
      fontWeight: "bold",
      flexDirection: "row",
      fontSize: 12
    },

    reviewText: {
      fontSize: 115
    }
  });
  