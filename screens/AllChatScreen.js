import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  TextInput, 
  KeyboardAvoidingView,
  Button,
  Pressable,
  ScrollView
} from 'react-native'
import React, { useReducer } from 'react'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar'

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ChatLink = createNativeStackNavigator();

function ChatScreenLanding() {
  return (
    <ChatLink.Navigator screenOptions={{ headerShown: false }}>
      <ChatLink.Screen name="AllChats" component={AllChats}/>
      <ChatLink.Screen name="ChatScreen" component={ChatScreen}/>
    </ChatLink.Navigator>
  )
}

const chats = [
  {
    id: 0,
    name: "bigboss1",
    job: "Chef assistant",
    image: require("../assets/images/chef-icon.png"),
    log: [
      {
        timestamp: 1,
        text: "Hi there, I am bigboss1, is this John Doe?",
        receiver: "user"
      },
      {
        timestamp: 2,
        text: "Hello, yes, I am John Doe",
        receiver: "recipient"
      }
    ]
  },
  {
    id: 1,
    name: "bigboss2",
    job: "Programming assistant",
    image: require("../assets/images/programming-icon.png"),
    log: [
      {
        timestamp: 1,
        text: "Hi there, I am bigboss2, is this John Doe?",
        receiver: "user"
      },
      {
        timestamp: 2,
        text: "Hello, yes, I am John Doe",
        receiver: "recipient"
      }
    ]
  }
]

var msg;

function AllChats({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1}}>
      <View style={{ backgroundColor: "#2C66FF", padding: 20 }}>
        <TouchableOpacity
          style=
          {{
            backgroundColor: "#2C66FF",
            paddingVertical: 4,
            paddingHorizontal: 16,
            borderRadius: 30,
            // Ensures TaskCloud Logo is Centred
            alignSelf: 'center'
          }}
          onPress={() => navigation.navigate("Home")}>
         <Header style={{ background: 'blue', flex: 1}}/>
        </TouchableOpacity>
      </View>
         <View>
        <Text style={{margin: 10, fontWeight: "bold", fontSize: 20}}>Chats:</Text>
          {
            chats.map((chat) => {
              return (
                // Touchable
                <TouchableOpacity style={styles.chatCard} onPress={() => {
                  navigation.navigate("Chats", {
                    screen: "ChatScreen",
                    params: {
                      chatRecipient: chat.name,
                      chatId: chat.id
                    }
                  })
                }}>
                  {/* Card contents */}
                  <Image source={chat.image} style={styles.cardIcon}/>
                  <View>
                    <Text style={[styles.cardText, {fontWeight: "bold", fontSize: 20}]}>{chat.name}</Text>
                    <Text style={styles.cardText}>{chat.job}</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
    </SafeAreaView>
  )
}

function ChatScreen({ route, navigation }) {
  const { chatRecipient } = route.params;
  const { chatId } = route.params;

  var chatLogRender = renderChatLog(chatId);
  ///////////////////////////////////////////////
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  function handleClick() {
    forceUpdate();
  }
  ///////////////////////////////////////////////
  return (
    
    <View style={{paddingHorizontal: 20, paddingVertical: 50, height: "80%"}}>
      
      <View style={{      
        flexDirection: "row",
        alignItems: "center"}}>
        {/* Back Button */}
        <Pressable 
          // Button Styling
          style={buttonStyles.button}
          // Button Navigation
          onPress={() => navigation.goBack()}>
            {/* Button Text */}
            <Text style={buttonStyles.text}>BACK</Text>
        </Pressable>

        {/* Header */}
        <View style={styles.chatHeaderBox}>
          <Text style={styles.chatHeaderText}>{chatRecipient}</Text>

        </View>
      </View> 


      {/* Chat bubbles */}
      <KeyboardAvoidingView style={styles.textInputContainer} behaviour="position">
      {
        chatLogRender.map((chat) => {
          return (
            chat.render
          )
        })
      }
      {/* Text input */}
      <View
        style=
        {{
          flexDirection: "row",
          alignItems: "center"
        }}>
        <TextInput style={styles.textInput} onChangeText={(text) => msg = text} />
        {/* Send Button */}
        <Pressable 
          // Button Styling
          style={buttonStyles.button}
          // Button Navigation
          onPress={() => {sendMessage(msg, chatId); handleClick()}}>
            {/* Button Text */}
            <Text style={buttonStyles.text}>SEND</Text>
        </Pressable>        
      </View>
      </KeyboardAvoidingView>      
      

    </View>
  )
}

function renderChatLog(chatId) {
  var chatLog = chats[chatId].log;

  for (var i = 0; i < chatLog.length; i++) {
    if (chatLog[i].receiver == "user") {
      chatLog[i].render = (
        <View style={styles.chatBubbleReceive}>
          <Text style={styles.chatTextReceive}>{chatLog[i].text}</Text>
          <View style={styles.leftArrow} />
          <View style={styles.leftArrowOverlap} />
        </View>
      )
    }
    else if (chatLog[i].receiver == "recipient") {
      chatLog[i].render = (
        <View style={styles.chatBubbleSend}>
          <Text style={styles.chatTextSend}>{chatLog[i].text}</Text>
          <View style={styles.rightArrow} />
          <View style={styles.rightArrowOverlap} />
        </View>
      )
    }
  }

  return chatLog;
}

function sendMessage(message, chatId) {
  const msgObj = {
    timestamp: chats[chatId].log.length + 1,
    text: message,
    receiver: "recipient"
  }

  chats[chatId].log.push(msgObj);
}

export default ChatScreenLanding;

/* Styles */
const styles = StyleSheet.create({
  chatCard: {
    borderColor: "black",
    borderRadius: 8,
    borderWidth: 2,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row"
  },
  cardText: {
    fontSize: 15,
    padding: 5,
    flexDirection: "row"
  },
  cardIcon: {
    width: 70,
    height: 60,
    resizeMode: "contain",
  },
  chatHeaderBox: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  chatHeaderText: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  chatBubbleSend: {
    backgroundColor: "#0078fe",
    padding:10,
    marginLeft: '45%',
    borderRadius: 5,
    //marginBottom: 15,
    marginTop: 5,
    marginRight: "5%",
    maxWidth: '50%',
    alignSelf: 'flex-end',
    //maxWidth: 500,
    borderRadius: 20,
  },
  chatTextSend: {
    fontSize: 16,
    color: "#fff"
  },
  chatBubbleReceive: {
    backgroundColor: "#dedede",
    padding:10,
    borderRadius: 5,
    marginTop: 5,
    marginLeft: "5%",
    maxWidth: '50%',
    alignSelf: 'flex-start',
    //maxWidth: 500,
    //padding: 14,
    //alignItems:"center",
    borderRadius: 20,
  },
  chatTextReceive: {
    fontSize: 16,
    color: "#000"
  },
  rightArrow: {
    position: "absolute",
    backgroundColor: "#0078fe",
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10
  },
  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#eeeeee",
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20
  
  },
  /*Arrow head for recevied messages*/
  leftArrow: {
      position: "absolute",
      backgroundColor: "#dedede",
      //backgroundColor:"red",
      width: 20,
      height: 25,
      bottom: 0,
      borderBottomRightRadius: 25,
      left: -10
  },
  leftArrowOverlap: {
      position: "absolute",
      backgroundColor: "#eeeeee",
      //backgroundColor:"green",
      width: 20,
      height: 35,
      bottom: -6,
      borderBottomRightRadius: 18,
      left: -20
  },
  textInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0

  },
  textInput: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 5,
    width: "80%"
  },
})



/*------------------------Button Styling--------------------------------*/
const buttonStyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 10,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});