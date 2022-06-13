import { Text, View, StyleSheet, Pressable } from "react-native";

const PrimaryButton = (props) => {
  function pressHandler() {
    console.log("====================================");
    console.log("Pressed");
    console.log("====================================");
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        onPress={pressHandler}
        android_ripple={{ color: "#ffbe0b" }}
      >
        <Text style={{ color: "#e5e5e5" }}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 5,

    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#2b2d42",
    borderRadius: 5,
    elevation: 10, //Shadow for andriod

    //Shadow for iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 0.5,
  },

  //Ripple effect for iOS
  pressed: {
    opacity: 0.5,
  },
});