import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import colors from "./utils/colors";
import { useState } from "react";
import { useFonts } from "expo-font";


export default function App() {
  const [userNumber, setUserNumber] = useState('')
  const [isGameOver, setIsGameOver] = useState(true)
  const [numberOfRounds, setNumberOfRounds] = useState(0)
  const pickedNumberHandler = (number)=>{
    setUserNumber(number)
    setIsGameOver(false)
  }

  function IsGameOver(){
    setIsGameOver(true)
  }

  function onRestartGame(){
    setIsGameOver(false)
    setUserNumber(NaN)
  }

  let screen = <StartScreen pickedNumberHandler = {pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen userNumber = {userNumber} isGameOver = {IsGameOver} setNumberOfRounds = {setNumberOfRounds}/>
  }
  if(isGameOver && userNumber){
    screen = <GameOverScreen onRestart={onRestartGame} userNumber = {userNumber} numberOfRounds={numberOfRounds}>Game over</GameOverScreen>
  }
  return (
    <>
      <LinearGradient
        colors={[colors.linearStart, colors.linearEnd]}
        style={styles.container}
      >
        <ImageBackground
          style={styles.container}
          source={require("./assets/bg.jpg")}
          resizeMode="cover"
          imageStyle={styles.imageBackground}
        >
          <SafeAreaView
            style={styles.container}
          >
           {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },

  imageBackground: {
    opacity: 0.1,
  },
});
