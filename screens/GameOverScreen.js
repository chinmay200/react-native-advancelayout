import { View, Image, Text, StyleSheet } from "react-native";
import IntroText from "../components/IntroText";
import PrimaryButton from "../components/PrimaryButton";
import colors from "../utils/colors";

function GameOverScreen({ onRestart, userNumber, numberOfRounds }) {
  return (
    <View style={styles.container}>
      <IntroText>{"Game Over"}</IntroText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/fg.jpg")}
        ></Image>
      </View>
      <View>
        <Text style={styles.feedbackText}>
          The computer took{" "}
          <Text style={styles.triesAndNumber}>{numberOfRounds}</Text> tries to
          get <Text style={styles.triesAndNumber}>{userNumber}</Text>
        </Text>
      </View>
      <PrimaryButton onPress={onRestart}>{"Start again"}</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    borderColor: colors.primary500,
    borderWidth: 2,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  feedbackText: {
    fontSize: 24,
    textAlign: "center",
  },

  triesAndNumber: {
    color: colors.primary500,
  },
});
