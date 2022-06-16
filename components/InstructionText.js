import React from 'react'
import { StyleSheet, Text } from 'react-native'
import colors from '../utils/colors'

function InstructionText() {
  return (
    <Text style={styles.instruction}>is your number higher or lower</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
    instruction:{
        fontSize:20,
        textAlign:"center",
        color:colors.secondry500,
        marginVertical:5
    }
})