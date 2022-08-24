import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import AllChatScreen from '../screens/AllChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WalletScreen from '../screens/WalletScreen';
import ResumeScreen from '../screens/ResumeScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    // const tabsScreen = [{name:'Home', imageSrc: require() }, {name:'Chats', imageSrc: require()}]
    return(
        <Tab.Navigator
         tabBarOptions={
            {showLabel: false}
         } 
         screenOptions={{
            headerShown: false,
            tabBarStyle: { 
                position: "absolute",
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 90, 
                   ...styles.shadow
            },
          }}
        >
            {/* {tabsScreen.map((tabsObject) => {
                return { <Tabs.Screen></Tabs.Screen>}
            })} */}
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image  
                             source={require("../assets/images/home-icon.png")}
                             resizeMode="contain"
                             style={{
                                width: 25,
                                height: 25,
                                bottom: 5,
                                tintColor: focused ? '#2C66FF' : '#748c94'
                             }}
                            />
                              <Text
                                style={{color: focused ? '#2C66FF' : '#748c94', fontSize: 12}}>
                                 Home
                              </Text>
                        </View>
                    )
                }}  
            />
            <Tab.Screen 
                name="Chats" 
                component={AllChatScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image  
                             source={require("../assets/images/chats-icon.png")}
                             resizeMode="contain"
                             style={{
                                width: 25,
                                height: 25,
                                bottom: 5,
                                tintColor: focused ? '#2C66FF' : '#748c94'
                             }}
                            />
                              <Text
                                style={{color: focused ? '#2C66FF' : '#748c94', fontSize: 12}}>
                                 Chats
                              </Text>
                        </View>
                    )
                }}  
             />
            <Tab.Screen 
                name="Resume" 
                component={ResumeScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                        <Image  
                        source={require("../assets/images/resume-icon.png")}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            bottom: 5,
                            tintColor: focused ? '#2C66FF' : '#748c94'
                        }}
                        />
                        <Text
                            style={{color: focused ? '#2C66FF' : '#748c94', fontSize: 12}}>
                            Resume
                        </Text>
                        </View>
                    )
                }} />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image  
                             source={require("../assets/images/profile-icon.png")}
                             resizeMode="contain"
                             style={{
                                width: 25,
                                height: 25,
                                bottom: 5,
                                tintColor: focused ? '#2C66FF' : '#748c94'
                             }}
                            />
                              <Text
                                style={{color: focused ? '#2C66FF' : '#748c94', fontSize: 12}}>
                                 Profile
                              </Text>
                        </View>
                    )
                }}  
            />
            <Tab.Screen 
                name="Wallet"
                component={WalletScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image  
                             source={require("../assets/images/wallet-icon.png")}
                             resizeMode="contain"
                             style={{
                                width: 25,
                                height: 25,
                                bottom: 5,
                                tintColor: focused ? '#2C66FF' : '#748c94'
                             }}
                            />
                              <Text
                                style={{color: focused ? '#2C66FF' : '#748c94', fontSize: 12}}>
                                 Wallet
                              </Text>
                        </View>
                    )
                }}  
            />
        </Tab.Navigator>
    )
}

/*------------------------Styling--------------------------------*/
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
  })

export default Tabs;