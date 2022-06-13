import { View, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton text="Reset" />
      <PrimaryButton text="Submit" />
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
});
