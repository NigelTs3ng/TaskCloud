import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import ListingItems from "../components/ListingItems";
import { auth } from "../components/firebase";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Auth");
      })
      .catch((error) => alert(error.message));
  };

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

      {/* <SearchBar /> */}
      <Categories />
      <View style={styles.signOutContainer}>
        <Text style={styles.signOutMsg}>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={handleSignOut}>
          <Text style={styles.signOutButton}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <ListingItems />
    </SafeAreaView>
  );
};

export default HomeScreen;

/*----------------------Styling-------------------*/
const styles = StyleSheet.create({
  head: {
    backgroundColor: "#2C66FF",
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 30,
    alignSelf: "center",
  },

  signOutContainer: {
    backgroundColor: "#2C66FF",
    width: "100%",
    padding: 15,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },

  signOutMsg: {
    color: "white",
    fontWeight: "220",
    fontSize: 14,
  },

  signOutButton: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
