import {  Text ,StyleSheet} from "react-native";
import colors from "../utils/colors";

export default function Title(props) {
  return (
    <Text style={styles.title}>{props.title}</Text>
  );
}

const styles = StyleSheet.create({
    title:{
        paddingBottom:5,
        paddingHorizontal:10,
        marginBottom:20,
        fontSize:28,
        color:colors.secondry500,
        borderBottomWidth:3,
        borderBottomColor:colors.secondry500,
        borderLeftWidth:3,
        borderLeftColor:colors.secondry500,
        borderRadius:5,
        
    }
})