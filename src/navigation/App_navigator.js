import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  CarScreen,
  HomeScreen,
  DetailInformationScreen
} from "../screens/index";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Car" component={CarScreen} />
        <Stack.Screen name="DetailInformation" component={DetailInformationScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}