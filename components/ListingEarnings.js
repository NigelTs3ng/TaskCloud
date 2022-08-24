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
      text: "07 June 2022, 19:38",
      text2: "KIM'S SEAFOOD PTE. LTD.",
      text3: "+ $120"
    },
  
    {
      id: 2,
      image: require("../assets/images/programming-icon.png"),
      text: "17 June 2022, 20:38",
      text2: "KINDERTOTS INSTITUTION",
      text3: "+ $160"
    }
  ];
  
  export default function LisingEarnings() {
    return (
      <ScrollView>
        {items.map((item) => {
          return (
              <View style={styles.listingBox}>
                <Image source={item.image} style={styles.icon} />
                <View>
                  <Text style={styles.listingText}>{item.text}</Text>
                  <Text style={styles.normalText}>{item.text2}</Text>
                </View>
                <View>
                <Text style={{paddingLeft: 10}}>{item.text3}</Text>
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
      borderRadius: 0,
      borderWidth: 1,
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
      fontSize: 10
    },

    normalText : {
        fontSize: 8
    }
  });
  