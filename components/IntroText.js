import {StyleSheet, Text} from 'react-native'
import colors from '../utils/colors'

function IntroText({children}) {
  return (
    <Text style = {styles.introText}>{children}</Text>
  )
}

export default IntroText

const styles = StyleSheet.create({
    introText:{
        fontSize:40,
        color:colors.primary500,
        borderBottomColor:colors.primary500,
        borderBottomWidth:2,
        borderLeftColor:colors.primary500,
        borderLeftWidth:2,
        borderRadius:5,
        marginBottom:50,
        paddingHorizontal:5,
        textAlign:"center"
    }
})