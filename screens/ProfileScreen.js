import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Button,
  Pressable,
  ScrollView,
  Dimensions,
  Image,
  Modal,
  TextInput
} from "react-native";
import React, {useState} from "react";
import Header from "../components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Picker for add child status form
import { Picker } from "@react-native-picker/picker";


import UserProfileInfo from "../components/UserProfileInfo";
import ParentProfileInfo from "../components/ParentProfileInfo";

const ProfileLink = createNativeStackNavigator();

  // Example set of linked accounts
  const parent = {
    linkedAccounts: [],
  };

// Stack navigator
const ProfileScreen = () => {
  return (
    <ProfileLink.Navigator screenOptions={{ headerShown: false }}>
      <ProfileLink.Screen name="SelectProfile" component={SelectProfile} />
      <ProfileLink.Screen name="ProfileUser" component={ProfileUser} />
      <ProfileLink.Screen name="ProfileParent" component={ProfileParent} />
    </ProfileLink.Navigator>
  );
};

// Default landing page
function SelectProfile({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
        {/* <SearchBar /> */}
        <View style={{ backgroundColor: "#2C66FF", padding: 20 }}>
        <TouchableOpacity
          style=
          {{
            backgroundColor: "#2C66FF",
            paddingVertical: 4,
            paddingHorizontal: 16,
            borderRadius: 30,
            // Ensures TaskCloud Logo is Centred
            alignSelf: "center"
          }}
          onPress={() => navigation.navigate("Home")}>
         <Header style={{ background: 'blue', flex: 1}}/>
        </TouchableOpacity>
      </View>





      <View style={styles.container}>
        <Text style={styles.header}> I am a... </Text>

        <View style={{ padding: 10 }} />



        {/* User link */}
      <Pressable         
      style={({ pressed }) => 
      [{
          backgroundColor: pressed
          // On press, background color will be
            ? '#0080ff'
          // On release, background color will be
            : 'blue'
        },
        buttonStyles.button,
      ]}           
      onPress={() => {
            navigation.navigate("Profile", {
              screen: "ProfileUser",
              params: {
                userId: 0,
              },
            });
          }}>
        <Text style={buttonStyles.text}>User</Text>
      </Pressable>

        <View style={{ padding: 10 }} />

        {/* Parent link */}
        <Pressable 
          // Button Styling
          style={({ pressed }) => 
          [{
              backgroundColor: pressed
              // On press, background color will be
                ? '#0080ff'
              // On release, background color will be
                : 'blue'
            },
            buttonStyles.button,
          ]}   
          // Button Navigation
          onPress={() => navigation.navigate("ProfileParent")}>
            {/* Button Text */}
            <Text style={buttonStyles.text}>Parent</Text>
        
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

// Preset list of example users
const users = [
  {
    name: "John",
    hp: "9876-5432",
    age: "16",
    status: "At E Corp",
  },
  {
    name: "Jane",
    hp: "9876-5432",
    age: "16",
    status: "inactive",
  },
];

// User profile page
function ProfileUser({ route, navigation }) {
  const { userId } = route.params;
  const { fromParent } = route.params;

  return (
    <View>
      {
        // Display back button if user entered this screen from the parent screen
        fromParent == true && (
          <Button
            title="Back"
            onPress={() => navigation.navigate("ProfileParent")}
          />
        )
      }
      <SafeAreaView>
        {/* TaskCloud Header */}
        <View style={{ backgroundColor: "#2C66FF", padding: 20 }}>
          <TouchableOpacity
            style=
            {{
              backgroundColor: "#2C66FF",
              paddingVertical: 4,
              paddingHorizontal: 16,
              borderRadius: 30,
            // Ensures TaskCloud Logo is Centred
            alignSelf: "center"              
            }}
            onPress={() => navigation.navigate("Home")}>
          <Header style={{ background: 'blue', flex: 1}}/>
          </TouchableOpacity>
        </View>

        {/* Back Button */}
        <Pressable 
          // Button Styling
          style={({ pressed }) => [
            {
              backgroundColor: pressed
              // On press, background color will be
                ? '#0080ff'
              // On release, background color will be
                : 'blue'
            },
            buttonStyles.backButton          
          ]}
          // Button Navigation
          onPress={() => navigation.goBack()}>
            {/* Button Text */}
            <Text style={buttonStyles.text}>Back</Text>
        
        </Pressable>
        {/* Enables Users to scroll up and down */}
        <ScrollView>

          {/* Information about the user */}
          <UserProfileInfo />

          {/* Location Services Button */}
          <Pressable 
            // Button Styling
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                // On press, background color will be
                  ? 'lightblue'
                // On release, background color will be
                  : '#b3cce5'
              },
              buttonStyles.ProfileButtons
            ]}
            // Button Navigation
            onPress={() => navigation.navigate('Gps')}>
              {/* Button Text */}
              <Text style={buttonStyles.ProfileButtonsText}>Location Services</Text>
          </Pressable>

          {/* Wallet Button */}
          <Pressable 
            // Button Styling
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                // On press, background color will be
                  ? 'lightblue'
                // On release, background color will be
                  : '#b3cce5'
              },
              buttonStyles.ProfileButtons
            ]}            // Button Navigation
            onPress={() => navigation.navigate('Wallet')}>
              {/* Button Text */}
              <Text style={buttonStyles.ProfileButtonsText}>Wallet</Text>
          </Pressable>

          {/* Terms & Conditions Button */}
          <Pressable 
            // Button Styling
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                // On press, background color will be
                  ? 'lightblue'
                // On release, background color will be
                  : '#b3cce5'
              },
              buttonStyles.ProfileButtons
            ]}            // Button Navigation
            // onPress={() => navigation.navigate('Wallet')}
            >
              {/* Button Text */}
              <Text style={buttonStyles.ProfileButtonsText}>Terms & Conditions</Text>
          </Pressable>

          {/* Feedback Button */}
          <Pressable 
            // Button Styling
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                // On press, background color will be
                  ? 'lightblue'
                // On release, background color will be
                  : '#b3cce5'
              },
              buttonStyles.ProfileButtons
            ]}            // Button Navigation
            // onPress={() => navigation.navigate('Wallet')}
            >
              {/* Button Text */}
              <Text style={buttonStyles.ProfileButtonsText}>Feedback</Text>
          </Pressable>

          {/* Contact Us Button */}
          <Pressable 
            // Button Styling
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                // On press, background color will be
                  ? 'lightblue'
                // On release, background color will be
                  : '#b3cce5'
              },
              buttonStyles.ProfileButtons
            ]}            // Button Navigation
            // onPress={() => navigation.navigate('Wallet')}
            >
              {/* Button Text */}
              <Text style={buttonStyles.ProfileButtonsText}>Contact Us</Text>
          </Pressable>
          {/* Empty Spaces to ensure all content can be seen */}
          <View style={{paddingVertical: Dimensions.get('window').height * .33}}/>   
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

// Parent profile page
function ProfileParent({ navigation }) {
  // Values for input form
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Age, setAge] = useState("");
  const [Status, setStatus] = useState("");

  // Function which will push input details
  const handleSubmission = () => {
    const apple = {
      name: Name,
      hp: Phone,
      age: Age,
      status: Status,
    }

    // Check if user has not filled up any of the form input
    if (Name == '' || Phone == '' || Age == '')
    {
      alert ("Form has not been filled");
      return;
    }

    // Checks if user has added too many children in the app
    if (parent.linkedAccounts.length > 4)
    {
      alert("Maximum amount of child added!");
      return;
    }

    // Check if user's age is too extreme
    else if (Age > 30 || Age <= 0)
    {
      alert("Invalid age, please try again!");
      return;
    }

    //parent.push(apple);
    parent.linkedAccounts.push(apple);

    // Alert User that addition of form has been successfull
    alert("Child: "+ Name + " has been added successfully")

    setModalVisible(!modalVisible)  
  };


  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>  
        {/* TaskCloud Header */}
        <View style={{ backgroundColor: "#2C66FF", padding: 20 }}>
        <TouchableOpacity
          style=
          {{
            backgroundColor: "#2C66FF",
            paddingVertical: 4,
            paddingHorizontal: 16,
            borderRadius: 30,
            // Ensures TaskCloud Logo is Centred
            alignSelf: "center"            
          }}
          onPress={() => navigation.navigate("Home")}>
         <Header style={{ background: 'blue', flex: 1}}/>
        </TouchableOpacity>
      </View>

      {/* Back Button */}
      <Pressable 
        // Button Styling
        style={({ pressed }) => [
          {
            backgroundColor: pressed
            // On press, background color will be
              ? '#0080ff'
            // On release, background color will be
              : 'blue'
          },
          buttonStyles.backButton          
        ]}
        // Button Navigation
        onPress={() => navigation.goBack()}>
          {/* Button Text */}
          <Text style={buttonStyles.text}>Back</Text>
      
      </Pressable>

      {/* Information about the user */}
      <View styles={{backgroundColor:'black', height:'100%'}}>
        <ScrollView>
        <ParentProfileInfo />
        <View style={styles.container}>
        <Text>Linked accounts: </Text>
        {parent.linkedAccounts.map((user, index) => {
          return (

            // Each card is a touchable that links to the corresponding user profile
            <View
              style={[styles.container, styles.profileCard]}
              onPress={() => {
                navigation.navigate("Profile", {
                  screen: "ProfileUser",
                  params: {
                    userId: index,
                    fromParent: true,
                    
                  },
                });
              }}
            >

              <View style = {{display: 'flex', flexDirection: 'row'}}>
                {/* Left Column: Image of user*/}
                <View style = {{padding: 10, alignSelf: "center"}}>
                  <Image source= {require("../assets/images/tutor-icon.png")} style = {{
                    width: 70,
                    height: 70,
                    resizeMode: "contain"}}/> 
                </View>
                {/* Right Column: Name, age and ratings of user*/}
                <View style = {{paddingLeft: '7%', paddingTop: '8%'}}>
                  <Text style={styles.profileText}>Name: {user.name}</Text>
                  <Text style={styles.profileText}>HP: {user.hp}</Text>
                  <Text style={styles.profileText}>Age: {user.age}</Text>
                  <Text style={styles.currentTaskText}>Curently: {user.status}</Text>
                </View>
              </View>
              {/* Track Location Button */}
              <Pressable 
                // Button Styling
                style={({ pressed }) => [
                {
                  backgroundColor: pressed
                  // On press, background color will be
                  ? 'white'
                  // On release, background color will be
                  : '#60cc7d'
                },
                buttonStyles.CheckLocationButton
              ]}
              // Button Navigation
              onPress={() => {
                // If user status is inactive, tell parent that person is not working
                if (user.status != 'Inactive') navigation.navigate('Gps')
                else alert("Person is not working at the moment")
            }
                }>
              {/* Button Text */}
              <Text style={buttonStyles.CheckLocationButtonText}>Check Location</Text>
            </Pressable>

            </View>
          );
        })}
      </View>
      {/* Apple */}
      {/* Actual design of the modal  */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={ModalStyles.centeredView}>
          <View style={ModalStyles.modalView}>
          <ScrollView>
            <Text style={ModalStyles.modalText}>Input Child Details Below</Text>
            <Text>Name:</Text>
            {/* name input*/}
            <TextInput 
            placeholder="Name"
            value={Name}
            maxLength={20}
            style={formStyles.textInputs}
            onChangeText={(text) => setName(text)}/>

            {/* Phone input*/}
            <Text>Phone:</Text>
            <TextInput 
            placeholder="Phone number"
            value={Phone}
            keyboardType={"number-pad"}
            maxLength={8}
            style={formStyles.textInputs}
            onChangeText={(text) => setPhone(text)}/>

            {/* age input */}
            <Text>Age:</Text>
            <TextInput 
            placeholder="Age"
            value={Age}
            maxLength={2}
            style={formStyles.textInputs}
            keyboardType={"number-pad"}
            onChangeText={(text) => setAge(text)}/>

            {/* status input */}
            <Text>Status:</Text>
            <Picker
              selectedValue={Status}
              onValueChange={(value) => setStatus(value)}
              style={formStyles.pickers}
            >
              {/* Values */}
              {/* Working */}
              <Picker.Item label="Working" value="Working" />
              {/* Inactive */}
              <Picker.Item label="Inactive" value="Inactive" />
            </Picker>

            <Pressable
                      // Button Styling
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                  // On press, background color will be
                    ? '#0080ff'
                  // On release, background color will be
                    : 'blue'
                },
                buttonStyles.ProfileButtons,
              ]}
              onPress={() => {
                // Submits the form input
                handleSubmission();
              }}
            >
              <Text style={ModalStyles.textStyle}>Submit</Text>
            </Pressable>

            <Pressable
                      // Button Styling
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                  // On press, background color will be
                    ? '#0080ff'
                  // On release, background color will be
                    : 'blue'
                },
                buttonStyles.ProfileButtons,
              ]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={ModalStyles.textStyle}>Exit</Text>
            </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Terms & Conditions Button */}
      <Pressable 
        // Button Styling
        style={({ pressed }) => [
          {
            backgroundColor: pressed
            // On press, background color will be
              ? 'white'
            // On release, background color will be
              : '#60cc7d'
          },
          buttonStyles.ProfileButtons
        ]}            
        // Pop Up add child screen
        onPress={() => {
          setModalVisible(true)}}
        >
          {/* Button Text */}
          <Text style={buttonStyles.ProfileButtonsText}>Add Child</Text>
      </Pressable>
            {/* Terms & Conditions Button */}
            <Pressable 
        // Button Styling
        style={({ pressed }) => [
          {
            backgroundColor: pressed
            // On press, background color will be
              ? 'lightblue'
            // On release, background color will be
              : '#b3cce5'
          },
          buttonStyles.ProfileButtons
        ]}            // Button Navigation
        // onPress={() => navigation.navigate('Wallet')}
        >
          {/* Button Text */}
          <Text style={buttonStyles.ProfileButtonsText}>Terms & Conditions</Text>
      </Pressable>

      {/* Feedback Button */}
      <Pressable 
        // Button Styling
        style={({ pressed }) => [
          {
            backgroundColor: pressed
            // On press, background color will be
              ? 'lightblue'
            // On release, background color will be
              : '#b3cce5'
          },
          buttonStyles.ProfileButtons
        ]}            // Button Navigation
        // onPress={() => navigation.navigate('Wallet')}
        >
          {/* Button Text */}
          <Text style={buttonStyles.ProfileButtonsText}>Feedback</Text>
      </Pressable>

      {/* Contact Us Button */}
      <Pressable 
        // Button Styling
        style={({ pressed }) => [
          {
            backgroundColor: pressed
            // On press, background color will be
              ? 'lightblue'
            // On release, background color will be
              : '#b3cce5'
          },
          buttonStyles.ProfileButtons
        ]}            // Button Navigation
        // onPress={() => navigation.navigate('Wallet')}
        >
          {/* Button Text */}
          <Text style={buttonStyles.ProfileButtonsText}>Contact Us</Text>
      </Pressable>
      {/* Empty Spaces to ensure all content can be seen */}
      <View style={{paddingVertical: Dimensions.get('window').height * .33}}/>  
      </ScrollView>
      </View>

      
    </SafeAreaView>
  );
}

export default ProfileScreen;
/*------------------------Modal Styling--------------------------------*/
const ModalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})
/*------------------------Form Input Styling--------------------------------*/
const formStyles = StyleSheet.create({
  textInputs: {
    marginVertical: 10,
    width: "99%",
    padding: 10,
    borderWidth: 2,
    alignSelf: "center",
    borderColor: "#666",
  },
  
  pickers: {
    width: "99%",
    borderWidth: 2,
    borderColor: "#666",
    alignSelf: "center"
  }
})



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
    backgroundColor: "grey",
  },
  currentTaskText: {
    fontSize: 15,
    margin: 5,
    textAlign: "center",
  }
});

/*------------------------Button Styling--------------------------------*/
const buttonStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    margin: 5,
    borderWidth: 1
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  ProfileButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    margin: 5,
    borderWidth: 1
  },
  ProfileButtonsText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black'
  },

  CheckLocationButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    margin: 5,
    borderWidth: 1
  },
  CheckLocationButtonText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black'
  },

  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    margin: 5,
    borderWidth: 1
  }
});

