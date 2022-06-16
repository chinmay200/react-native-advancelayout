import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";
import Title from "../components/Title";
import colors from "../utils/colors";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import IntroText from "../components/IntroText";
import { Ionicons } from "@expo/vector-icons";
import InstructionText from "../components/InstructionText";
import LogItem from "../components/LogItem";
const randomNumber = (min, max, exclude) => {
  const num = Math.floor(Math.random() * (max - min)) + min;

  if (num === exclude) {
    randomNumber(min, max, exclude);
  }
  return num;
};

let minBound = 1;
let maxBound = 100;
const GameScreen = (props) => {
  const initialGuess = randomNumber(minBound, maxBound, props.userNumber);
  const [guessedNum, setGuessedNum] = useState(initialGuess);
  const [prevGuessedNumbers, setPrevGuessedNumbers] = useState([]);

  useEffect(() => {
    if (guessedNum === props.userNumber) {
      props.setNumberOfRounds(roundNumber)
      props.isGameOver();
    }
  }, [guessedNum, props.userNumber, props.isGameOver]);

  useEffect(() => {
    setPrevGuessedNumbers([guessedNum]);
  }, []);

  function addGuessedNumbers(newNumber) {
    setPrevGuessedNumbers((prevGuesses) => [newNumber, ...prevGuesses]);
  }

  const nextGuess = (direction) => {
    if (
      (direction === "low" && guessedNum < props.userNumber) ||
      (direction === "high" && guessedNum > props.userNumber)
    ) {
      Alert.alert(
        "Chutiya banaega salle",
        "Sab dekh rha hu lawde cheat mat crow!!!!",
        [{ text: "cancel" }]
      );
      return;
    }
    if (direction === "low") {
      maxBound = guessedNum;
    } else {
      minBound = guessedNum;
    }
    let newGuess = randomNumber(minBound, maxBound, guessedNum);
    setGuessedNum(newGuess);
    addGuessedNumbers(newGuess);
  };

  const roundNumber = prevGuessedNumbers.length;

  return (
    <View style={styles.gameScreenContainer}>
      <IntroText>Check number</IntroText>
      <View style={styles.gameContainer}>
        <Title title={"Computer's guess"} />
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{guessedNum}</Text>
        </View>
        <View>
          <InstructionText />
          <View style={styles.buttonsContainer}>
            <PrimaryButton
              onPress={() => {
                nextGuess("high");
              }}
            >
              <Ionicons name="md-add" size={24} color="white"></Ionicons>
            </PrimaryButton>
            <PrimaryButton
              onPress={() => {
                nextGuess("low");
              }}
            >
              <Ionicons name="md-remove" size={24} color="white"></Ionicons>
            </PrimaryButton>
          </View>
        </View>
      </View>
      
        <View style ={styles.listContainer}>
          <FlatList
            data={prevGuessedNumbers}
            renderItem={(itemData) => <LogItem roundNumber={roundNumber - itemData.index} guessedNumber={itemData.item} />}
            keyExtractor={(item) => Math.random() + new Date().toTimeString()}
          />
        </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    marginTop:200,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100%",
  },
  gameContainer: {
    backgroundColor: colors.primary500,
    paddingVertical: 20,
    paddingHorizontal: 5,
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 20,
  },

  numberContainer: {
    backgroundColor: colors.secondry200,
    width: "80%",
    paddingVertical: 10,
    borderRadius: 5,
  },

  number: {
    fontSize: 27,
    color: colors.primary500,
    textAlign: "center",
  },

  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  listContainer:{
    marginTop:15,
    flex:1,
    padding:10,
    width:"95%",
  }
});
