import {
  View, 
  Text, 
  Image, 
  ScrollView, 
  TouchableOpacity,
  StyleSheet,
  Button,
  Touchable
} from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'

const accounts = [
  {
      id: 1,
      num: "1234-XXXX-XXXX-XXXX"
  },
  {
      id: 2,
      num: "4567-XXXX-XXXX-XXXX"
  }
];

const balance = "xx";

export default function WalletScreen() {
  // Modal
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (
    <View style={{padding: 20, justifyContent: "center"}}>
      <Text style={styles.accountsHeader}> Balance: {balance} </Text>
      <Text style={styles.accountsHeader}> Linked accounts </Text>
      <ScrollView>
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
      </ScrollView>
      <Button title="Deposit" onPress={handleModal}/>
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
      <Button title="Close" onPress={handleModal}/>
      </View>
      </Modal>
    </View>
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