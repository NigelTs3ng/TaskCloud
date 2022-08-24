import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import ListingItems from "../components/ListingItems";
import { StackActions } from "@react-navigation/native";
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
      <View style={{ backgroundColor: "#2C66FF", padding: 40 }}>
        <Header style={{ background: "blue", flex: 1 }} />
        <SearchBar />
      </View>
      <Categories />
      <View
        style={{
          backgroundColor: "#2C66FF",
          borderWidth: 2,
          width: "100%",
          padding: 15,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "300",
            fontSize: 15,
          }}
        >
          Email: {auth.currentUser?.email}
        </Text>
        <TouchableOpacity onPress={handleSignOut}>
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            Sign out
          </Text>
        </TouchableOpacity>
      </View>
      <ListingItems />
    </SafeAreaView>
  );
};

export default HomeScreen;
