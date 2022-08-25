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
      <Pressable style={buttonStyles.button}           
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
          style={buttonStyles.button}
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
  // // Example set of linked accounts
  // const parent = {
  //   linkedAccounts: [users[0], users[1]],
  // };
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

    //parent.push(apple);
    parent.linkedAccounts.push(apple);

    console.log(parent.linkedAccounts[parent.linkedAccounts.length - 1]);
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
                  <Text style={styles.currentTaskText}>Current Task: {user.status}</Text>
                </View>
              </View>
              {/* <Text style={styles.profileText}>Current Task: {user.status}</Text> */}
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
                if (user.status != 'inactive') navigation.navigate('Gps')
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
            <Text style={ModalStyles.modalText}>Input User Details Below</Text>
            {/* name input*/}
            <TextInput 
            placeholder="Name"
            value={Name}
            onChangeText={(text) => setName(text)}/>

            {/* hp input*/}
            <TextInput 
            placeholder="Phone number"
            value={Phone}
            onChangeText={(text) => setPhone(text)}/>

            {/* age input */}
            <TextInput 
            placeholder="Age"
            value={Age}
            onChangeText={(text) => setAge(text)}/>

            {/* status input */}
            <TextInput 
            placeholder="Status"
            value={Status}
            onChangeText={(text) => setStatus(text)}/>

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
                buttonStyles.ProfileButtons,
                ModalStyles.buttonClose
              ]}
              onPress={() => {
                // Submits the form input
                handleSubmission();
                alert("Form has been submitted!")
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
                    ? 'white'
                  // On release, background color will be
                    : '#60cc7d'
                },
                buttonStyles.ProfileButtons,
                ModalStyles.buttonClose
              ]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={ModalStyles.textStyle}>Exit</Text>
            </Pressable>
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
  },
});

/*------------------------Button Styling--------------------------------*/
const buttonStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
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
  },
});

