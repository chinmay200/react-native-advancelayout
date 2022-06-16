import {Text, View, StyleSheet } from "react-native";
import colors from "../utils/colors";

function LogItem({roundNumber, guessedNumber }) {
  return (
    <View style={styles.itemContiner}>
      <Text style = {styles.textStyle}>#{roundNumber}</Text>
      <Text style = {styles.textStyle}>Computer's guess:{guessedNumber}</Text>
    </View>
  );
}

export default LogItem;

const styles = StyleSheet.create({
    itemContiner:{
        borderColor:colors.secondry200,
        borderWidth:3,
        borderRadius:10,
        backgroundColor:colors.primary500,
        marginVertical:5,
        marginHorizontal:10,
        paddingHorizontal:15,
        paddingVertical:10,
        flexDirection:"row",
        justifyContent:"space-evenly",

    },

    textStyle:{
        fontSize:24,
        color:colors.secondry500,
    }
});
