
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Rate(props){
    const {wins, loses, ties, matches} = props
    return(
        <View >
        <Text style = {styles.result}>Win matches  : {matches === 0 ? 0 : (wins/matches).toFixed(2)*100} %</Text>
        <Text style = {styles.result}>Lose matches : {matches === 0 ? 0 : (loses/matches).toFixed(2)*100} %</Text>
        <Text style = {styles.result}>Tie matches  : {matches === 0 ? 0 : (ties/matches).toFixed(2)*100} %</Text>
      </View>
    )
}


const styles = StyleSheet.create({ 
    result : {
      fontSize : 20,
      marginVertical : 5,
    }
})
