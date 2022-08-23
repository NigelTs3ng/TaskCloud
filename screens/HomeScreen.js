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
      <ListingItems />
      <View>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={handleSignOut}>
          <Text>Sign out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
