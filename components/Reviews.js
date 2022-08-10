import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  
  const items = [
    {
      id: 1,
      image: require("../assets/images/chef-icon.png"),
      text: "KIM'S SEAFOOD PTE. LTD",
      text2: "View Review"
    },
  
    {
      id: 2,
      image: require("../assets/images/programming-icon.png"),
      text: "TaskCloud Cloud Solutions",
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
  ];
  
  export default function ListingItems({ navigation }) {
    return (
      <ScrollView>
        {items.map((item) => {
          return (
              <View style={styles.listingBox}>
                <Image source={item.image} style={styles.icon} />
                <View>
                  <Text style={styles.listingText}>{item.text}</Text>
                  <Text>{item.text2}</Text>
                </View>
              </View>
          );
        })}
      </ScrollView>
    );
  }
  
  /*------------------------Styling--------------------------------*/
  const styles = StyleSheet.create({
    listingBox: {
      backgroundColor: "#f8f8f8",
      borderRadius: 15,
      borderWidth: 1,
      margin: 5,
      flexDirection: "row",
      alignItems: "center",
    },
  
    icon: {
      width: 70,
      height: 60,
      resizeMode: "contain",
    },
  
    listingText: {
      fontWeight: "bold",
      flexDirection: "row",
    },
  });
  