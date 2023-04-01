import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { Home } from "./src/screens/Home";
import { StatusBar } from "expo-status-bar";

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  if(!fontsLoaded) {
    return null;
  }

  return (
    <>
    <StatusBar style="light"/>
    <Home />
    </>
  );
}