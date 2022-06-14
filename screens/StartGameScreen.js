import { View, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

const StartScreen = () => {
  const [number, setNumber] = useState("");

  const enteredNumber = (enterednumber) => {
    setNumber(enterednumber);
  };

  const resetInput = () => {
    setNumber("");
  };

  const onPressHandler = () => {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Error message", "Invalid input", [
        { text: "Ok", style: "default", onPress: resetInput },
      ]);
      return;
    }
    console.log(number);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={number}
        onChangeText={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={resetInput} text="Reset" />
        <PrimaryButton onPress={onPressHandler} text="Submit" />
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#ffbe0b",
    padding: 30,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 20,
  },

  input: {
    width: "100%",
    height: 40,
    fontSize: 30,
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomColor: "#31572c",
    borderBottomWidth: 2,
    color: "#31572c",
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
