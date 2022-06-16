import { View, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import colors from "../utils/colors";
import Title from "../components/Title";
import IntroText from "../components/IntroText";

const StartScreen = ({ pickedNumberHandler }) => {
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
    pickedNumberHandler(chosenNumber);
  };

  return (
    <View>
      <IntroText>Guess my number</IntroText>
      <View style={styles.inputContainer}>
        <Title title={"Pick a number"} />
        <TextInput
          placeholder="Between 0-99"
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={number}
          onChangeText={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={resetInput} >{"Reset"}</PrimaryButton>
          <PrimaryButton onPress={onPressHandler} >{"Submit"}</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.primary500,
    paddingVertical: 20,
    paddingHorizontal: 5,
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 20,
  },

  input: {
    width: "80%",
    height: 40,
    fontSize: 27,
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomColor: colors.secondry500,
    borderBottomWidth: 2,
    color: colors.secondry500,
    textAlign: "center",
  },

  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
