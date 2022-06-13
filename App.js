import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <>
        <View style={styles.container}>
          <StartScreen />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#204620",
  },
});
