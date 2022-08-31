import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import listingPicture from "../assets/images/listingPic.png";
import listingBar from "../assets/images/listingBar.png";
import { Dimensions } from "react-native";

export default function ListingScreen({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      {/* Header for the application */}
      <View style={{ backgroundColor: "#2C66FF", padding: 20 }}>
        {/* Home Button */}
        <TouchableOpacity
          style={styles.head}
          onPress={() => navigation.navigate("Home")}
        >
          <Header style={{ background: "blue", flex: 1 }} />
        </TouchableOpacity>
      </View>

      {/* Back Button */}
      <Pressable
        // Button Styling
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? // On press, background color will be
                "#0080ff"
              : // On release, background color will be
                "blue",
          },
          buttonStyles.backButton,
        ]}
        // Button Navigation
        onPress={() => navigation.goBack()}
      >
        {/* Button Text */}
        <Text style={buttonStyles.text}>Back</Text>
      </Pressable>
      <View
        style={{
          alignItems: "center",
          flexDirection: "column",
          flex: 1,
          width: "100%",
          alignSelf: "center",
        }}
      >
        <Image source={listingPicture} style={styles.listingImage}></Image>

        <View style={styles.signOutContainer}>
          <View>
            <Text style={styles.mainOne}>Kitchen Sous Chef</Text>
            <Text style={styles.mainTwo}>KIM'S SEAFOOD PTE. LTD.</Text>
            <Text style={styles.mainThree}>
              June Holidays 2022, 0800 - 1830
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              enim libero, aliquet auctor tempus vitae, vulputate fringilla
              augue.
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("AllChatScreen")}>
          <Image source={listingBar} style={styles.bar}></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

/*------------------------Button Styling--------------------------------*/
const buttonStyles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "blue",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  backButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    margin: 5,
    borderWidth: 1,
  },
});

/*----------------------Styling--------------------------------*/
const styles = StyleSheet.create({
  head: {
    backgroundColor: "#2C66FF",
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 30,
    alignSelf: "center",
  },

  listingImage: {
    borderColor: "black",
    borderWidth: 3,
    flexDirection: "column",
    flex: 1,
    width: "100%",
    height: Dimensions.get("window").height,
    alignSelf: "center",
  },

  signOutContainer: {
    backgroundColor: "white",
    height: "30%",
    width: "100%",
    padding: 15,
    paddingBottom: 15,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
  },

  mainOne: {
    fontSize: 25,
    fontWeight: "bold",
  },

  mainTwo: {
    fontSize: 15,
    fontWeight: "bold",
  },

  mainThree: {
    fontSize: 12,
    paddingBottom: 5,
  },
});
