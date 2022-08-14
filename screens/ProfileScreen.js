import {
  View, 
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Button
} from 'react-native'
import React from 'react'
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ProfileLink = createNativeStackNavigator();

const ProfileScreen = () => {
  return (
    <ProfileLink.Navigator screenOptions={{headerShown: false}}>
      <ProfileLink.Screen name="SelectProfile" component={SelectProfile} />
      <ProfileLink.Screen name="ProfileUser" component={ProfileUser} />
      <ProfileLink.Screen name="ProfileParent" component={ProfileParent} />
    </ProfileLink.Navigator>
  )
}

function SelectProfile ({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#2C66FF", padding: 40 }}>
          <Header style={{ background: "blue", flex: 1 }} />
          <SearchBar />
        </View>

        <View style={styles.container}>
          <Text style={styles.header}> I am a... </Text>

          <View style={{padding: 10}}/>
          <Button title="User" onPress={() => {
            navigation.navigate('Profile', {
              screen: 'ProfileUser',
              params: {
                userId: 0, 
              }
            });
          }}/>
          <View style={{padding: 10}}/>
          <Button title="Parent" onPress={() => navigation.navigate('ProfileParent')}/>
        </View>
    </SafeAreaView>
  )
}

const users = [
  {
    name: "John",
    hp: "9876-5432",
    age: "16",
    status: "inactive"
  },
  {
    name: "Jane",
    hp: "9876-5432",
    age: "16",
    status: "inactive"
  }
]

function ProfileUser({ route, navigation }) {
  const { userId } = route.params;
  const { fromParent } = route.params;

  // if (fromParent) {
  //   backBtn = <Button title="Back" onPress={() => navigation.navigate('ProfileParent')} />;
  // }
  // else {
  //   backBtn = <View/>;
  // }

  return(
    <View>
      {
        fromParent == true && <Button title="Back" onPress={() => navigation.navigate('ProfileParent')} />
      }
      <View style={[styles.container, styles.profileCard, {marginVertical: "50%"}]}>
        <Text style={styles.profileText}>Name: {`${users[userId].name}`}</Text>
        <Text style={styles.profileText}>HP: {`${users[userId].hp}`}</Text>
        <Text style={styles.profileText}>Age: {`${users[userId].age}`}</Text>
        <Text style={styles.profileText}>Status: {`${users[userId].status}`}</Text>
        <Button title="Get live location" />
      </View>
    </View>
  )
}

function ProfileParent({ navigation }) {
  const parent = {
    linkedAccounts: [users[0], users[1]]
  }

  return (
    <View style={styles.container}>
      <Text>Linked accounts: </Text>
      {
        parent.linkedAccounts.map((user, index) => {
          return (
            <TouchableOpacity 
            style={[styles.container, styles.profileCard]} 
            onPress={() => {
              navigation.navigate('Profile', {
                screen: 'ProfileUser',
                params: {
                  userId: index, 
                  fromParent: true
                }
              });
            }}>
              <Text style={styles.profileText}>Name: {user.name}</Text>
              <Text style={styles.profileText}>HP: {user.hp}</Text>
              <Text style={styles.profileText}>Age: {user.age}</Text>
              <Text style={styles.profileText}>Status: {user.status}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

export default ProfileScreen

/*------------------------Styling--------------------------------*/
const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10
  },
  profileText: {
    fontSize: 15,
    textAlign: 'left',
    margin: 5
  },
  profileCard: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#000000'
  }
})