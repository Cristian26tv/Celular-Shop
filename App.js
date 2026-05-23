import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation/App_navigator";
import { CartProvider } from "./src/context/cartContext"; 

export default function App() {
  return (
    
    <CartProvider>
      <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
    </CartProvider>
  );
}
