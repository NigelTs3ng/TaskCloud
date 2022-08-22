import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

// Email & Password Fields
const AuthScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    backgroundColor: "blue",
    width: '100%',
    padding: 15,
    borderRadius: 10,
  },

  buttonContainer: {
    width: '60%', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  buttonText: {},
});

export default AuthScreen;
