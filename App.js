import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import Tabs from "./components/Tab";
import GpsScreen from "./screens/GpsScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Tabs" component={Tabs}/>
        <Stack.Screen name ="Gps" component={GpsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
