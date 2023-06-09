import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

import { Loading } from "./src/components/Loading";
import { Home } from "./src/screens/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    <Loading />;
  }

  return (
    <>
      <Home />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
