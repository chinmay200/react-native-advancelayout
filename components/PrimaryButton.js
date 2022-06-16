import { Text, View, StyleSheet, Pressable } from "react-native";
import colors from "../utils/colors";

const PrimaryButton = (props) => {

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : styles.button
        }
        onPress={props.onPress}
        android_ripple={{ color: colors.primary500 }}
      >
        <Text style={{ color: "#e5e5e5" ,textAlign:"center"}}>{props.children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 5,
    overflow:"hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    width:"100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.buttonColor,
    borderRadius: 5,
    elevation: 10, //Shadow for andriod

    //Shadow for iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 0.5,
    overflow:"hidden",
  },

  //Ripple effect for iOS
  pressed: {
    opacity: 0.5,
    overflow:"hidden",
  },
});
