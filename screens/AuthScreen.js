import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  TextInput,
  ScrollView
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { auth } from "../components/firebase";
import { useNavigation } from "@react-navigation/core";

// Email & Password Fields
const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Tabs", { screen: "HomeScreen" });
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      {/* Header for the application */}
      <View style={{ backgroundColor: "#2C66FF", padding: 20}}>
        {/* Home Button */}
        <TouchableOpacity
          style=
          {{
            backgroundColor: "#2C66FF",
            paddingVertical: 4,
            paddingHorizontal: 16,
            borderRadius: 30,
            // Ensures TaskCloud Logo is Centred
            alignSelf: 'center'
          }}>
         <Header style={{ background: 'blue', flex: 1}}/>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal = {false}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}> Login </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      </ScrollView>

    </SafeAreaView>
  );
};

/*------------------------Styling--------------------------------*/
const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 5,
  },

  inputContainer: {
    width: "80%",
  },

  button: {
    backgroundColor: "#2C66FF",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#2C66FF",
    borderWidth: 2,
  },

  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  buttonOutlineText: {
    color: "#2C66FF",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default AuthScreen;
