import {
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
  SafeAreaView,
  Dimensions,
  Pressable
} from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import Header from "../components/Header";
import LisingEarnings from '../components/ListingEarnings';


const accounts = [
  {
      id: 1,
      num: "5412-7512-3412-3456"
  },
  {
      id: 2,
      num: "4567-XXXX-XXXX-XXXX"
  }
];

const balance = "xx";

export default function WalletScreen({navigation}) {
  // Modal
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 , flexDirection:"column"}}>
      {/* Header for the Page */}
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
      <ScrollView>
      <View style={{
        padding: 10,
      }}>
        <View style={{
          backgroundColor: "black",
          opacity: .75,
          padding: 10,
          borderRadius: 10/1
        }}>
        {/* Contains the details of the student being tracked (Name, Username and Current Location) */}
        <View style = {{
          display: 'flex', 
          flexDirection: 'row'
          }}>
          {/* Left Column: Image of user*/}
          <View style = {{padding: 10}}>
            <Image source= {require("../assets/images/User-Pic-Icon.png")} style = {{
              width: 80,
              height: 80,
              resizeMode: "contain"}}/> 
          </View>

          {/* Right Column: Name, age of user*/}
          <View style = {{paddingTop: "7%"}}>
            
            {/* Username Details */}
            <View style={{flexDirection:"row"}}>
              <Text style={{ fontSize: 18, color: 'white',  fontWeight: "bold"}}>Username: </Text>
              <Text style={{ fontSize: 16, color: 'white' }}>roadster29</Text>
            </View>

            {/* Name Details */}
            <View style={{flexDirection:"row"}}>
              <Text style={{ fontSize: 18, color: 'white',  fontWeight: "bold"}}>Name: </Text>
              <Text style={{ fontSize: 16, color: 'white' }}>Jane Doe</Text>
            </View>
          </View>
        </View>
        <View style={{padding: 20, justifyContent: "center", backgroundColor:"grey", borderRadius: 40/1}}>
        {/* Image of credit card */}
        <Image source= {require("../assets/images/creditCard.png")} 
          style = {{
            width: "100%",
            height: 200,
            resizeMode: "contain"}}
          /> 
      <Text style={styles.accountsHeader}> Balance: {balance} </Text>
      <Text style={styles.accountsHeader}> Linked accounts </Text>
        <View style={styles.accountsBox}>
        {
          accounts.map(account => {
            return (
              <View>
                  <Text style={styles.accountsText}>{account.num}</Text>
                  <View style={{
                      borderBottomColor: "black",
                      borderBottomWidth: StyleSheet.hairlineWidth
                      }}
                  />
              </View>
              );
          })
        }
        </View>
        <View>
          {/* Money Symbol */}
          <View style={earnedStyling.earningsBox}>
                <Image source={require("../assets/images/money.png")} style={earnedStyling.icon} />
                <View>
                  <Text style={earnedStyling.listingText}>Amount Earned: $280</Text>
                  <Text style={earnedStyling.normalText}>+10.2% from last month!</Text>
                </View>
              </View>
        </View>

        <LisingEarnings />
      
      {/* Deposit Button */}
      <Pressable 
          // Button Styling
          style={buttonStyles.button}
          // Button Navigation
          onPress={handleModal}>
          {/* Button Text */}
          <Text style={buttonStyles.text}>Deposit</Text>
      </Pressable>



      <Modal isVisible={isModalVisible} style={styles.popupBox}>
      <View>
        <Text> Select account to deposit to </Text>
        {
          accounts.map((account) => {
            return (
              <View>
                <TouchableOpacity style={styles.popupButton}>
                  <Text style={styles.accountsText}>{account.num}</Text>
                </TouchableOpacity>
              </View>
            )
          })
        }

      {/* Close Button */}
      <Pressable 
          // Button Styling
          style={buttonStyles.button}
          // Button Navigation
          onPress={handleModal}>
          {/* Button Text */}
          <Text style={buttonStyles.text}>Close</Text>
      </Pressable>


      </View>
      </Modal>
    </View>

      </View>


      </View>
      <View style={{paddingVertical: Dimensions.get('window').width * .15}}/>

      </ScrollView>
    </SafeAreaView>
  )
}

/** Styles */
const styles = StyleSheet.create({
  accountsBox: {
      backgroundColor: "#f8f8f8",
      borderRadius: 15,
      borderWidth: 1,
      margin: 5,
  },
  accountsHeader: {
      fontWeight: "bold"
  },
  accountsText: {
      paddingHorizontal: 15,
      paddingVertical: 5
  },
  popupBox: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f8f8f8",
      height: "auto"
  },
  popupButton: {
      margin: 10,
      backgroundColor: "#faecdc",
      alignItems: "center"
  },
  popupText: {
      
  }
})



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
});

  /*------------------------Amount Earned Styling--------------------------------*/
  const earnedStyling = StyleSheet.create({
    earningsBox: {
      backgroundColor: "#f8f8f8",
      borderRadius: 15,
      borderWidth: 1,
      margin: 5,
      flexDirection: "row",
      alignItems: "center",
    },
  
    icon: {
      width: 70,
      height: 60,
      resizeMode: "contain",
    },
  
    listingText: {
      fontWeight: "bold",
      flexDirection: "row",
      fontSize: 10
    },

    normalText : {
        fontSize: 8
    }
  });