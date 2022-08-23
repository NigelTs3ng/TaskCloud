import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useNavigation } from "@react-navigation/core";
import listingPicture from "../assets/images/listingPic.png";
import Description from "../assets/images/description.png";
import { Dimensions } from "react-native";

export default function ListingScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#2C66FF", padding: 30 }}>
        <Header style={{ background: "blue", flex: 1 }} />
        <SearchBar />
      </View>
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            flexDirection: "column",
            flex: 1,
            padding: 0,
          }}
        >
          <Image
            source={listingPicture}
            style={{
              flexDirection: "column",
              flex: 1,
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").height,
            }}
          ></Image>
        </View>

        <Image
          source={Description}
          style={{
            flexDirection: "column",
            flex: 1,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        ></Image>
      </ScrollView>
    </SafeAreaView>
  );
}

/*------------------------Styling--------------------------------*/
const styles = StyleSheet.create({
  listingPic: {
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    resizeMode: "contain",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  listing: {
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    padding: 0,
  },
});
