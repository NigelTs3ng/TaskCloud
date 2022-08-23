import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "./components/Tab";
import GpsScreen from "./screens/GpsScreen";
import AuthScreen from "./screens/AuthScreen";
import ListingScreen from "./screens/ListingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Auth"
          component={AuthScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tabs"
          component={Tabs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Listing"
          component={ListingScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Gps"
          component={GpsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
