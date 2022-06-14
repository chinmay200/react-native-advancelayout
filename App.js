import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <>
      <LinearGradient colors={["#273C2C", "#787117"]} style={styles.container}>
        <ImageBackground
          style={styles.container}
          source={require("./assets/bg.jpg")}
          resizeMode="cover"
          imageStyle={styles.imageBackground}
        >
          <StartScreen />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // backgroundColor: "#456827",
  },

  imageBackground:{
    opacity:0.2
  }
});
