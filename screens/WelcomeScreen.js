import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const WelcomePage = createNativeStackNavigator();

// Stack of Welcome, Login and Sign Up pages
const WelcomeScreen = () => {
  return (
    <WelcomePage.Navigator screenOptions={{ headerShown: false }}>
      <WelcomePage.Screen name="SelectOption" component={SelectOption} />
      <WelcomePage.Screen name="Log In" component={LogIn} />
      <WelcomePage.Screen name="Sign Up" component={SignUp} />
    </WelcomePage.Navigator>
  );
};

// Welcome Page
function SelectOption({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#2C66FF", padding: 40 }}>
        <Header style={{ background: "blue", flex: 1 }} />
        <SearchBar />
      </View>

      <View>
        {/* For Login */}
        <Button
          title="Log In"
          onPress={() => {
            navigation.navigate("Log In", {
              screen: "LogIn",
            });
          }}
        />
        <View />

        {/* For Sign Up */}
        <Button
          title="Sign In"
          onPress={() => {
            navigation.navigate("Sign Up", {
              screen: "Sign Up",
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
}

// Login Page
function LogIn({ route, navigation }) {
  return (
    <View>
      <Text> Log In here </Text>
    </View>
  );
}

// Sign Up Page
function SignUp({ route, navigation }) {
  return (
    <View>
      <Text> Sign up here </Text>
    </View>
  );
}

/*------------------------Styling--------------------------------*/
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
  },
  profileText: {
    fontSize: 15,
    textAlign: "left",
    margin: 5,
  },
  profileCard: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#000000",
  },
});

export default WelcomeScreen;
