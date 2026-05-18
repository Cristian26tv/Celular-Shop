import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./src/navigation/App_navigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}
