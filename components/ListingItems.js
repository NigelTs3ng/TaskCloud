import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const items = [
  {
    id: 1,
    image: require("../assets/images/chef-icon.png"),
    text: "Chef Assistant",
    text2: "Time: 0800 - 1800",
    text3: "Venue: Serangoon Avenue 3",
  },

  {
    id: 2,
    image: require("../assets/images/programming-icon.png"),
    text: "Programming Assistant",
    text2: "Time: 0800 - 1800",
    text3: "Venue: Bread Street 23",
  },

  {
    id: 3,
    image: require("../assets/images/tutor-icon.png"),
    text: "Tutoring Assistant",
    text2: "Time: 0800 - 1800",
    text3: "Venue: Admiral Avenue 10",
  },

  {
    id: 4,
    image: require("../assets/images/doctor-icon.png"),
    text: "Healthcare Assistant",
    text2: "Time: 0800 - 1800",
    text3: "Venue: Bartley Road Avenue 5",
  },
];

export default function ListingItems() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      {items.map((item) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate("Listing")}>
            <View style={styles.listingBox}>
              <Image source={item.image} style={styles.icon} />
              <View>
                <Text style={styles.listingText}>{item.text}</Text>
                <Text>{item.text2}</Text>
                <Text>{item.text3}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
