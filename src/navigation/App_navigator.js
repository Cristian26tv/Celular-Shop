import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  CarScreen,
  HomeScreen,
  DetailInformationScreen,
  LoginScreen
} from "../screens/index";
import RegisterScreen from "../screens/RegisterScreen";
import AddPhones from "../screens/addPhones";
import editPhone from "../screens/editPhone";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
    
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Car" component={CarScreen} />
        <Stack.Screen name="DetailInformation" component={DetailInformationScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="AddPhones" component={AddPhones} />
        <Stack.Screen name="EditPhone" component={editPhone} />

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}