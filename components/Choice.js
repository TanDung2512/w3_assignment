import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView  } from 'react-native';

export default function Choice(props){
    const {uri, name} = props.CHOICE
    
    return (
        <View style = {styles.choiceContainer}>
            <Text style = {styles.choiceDescription}>{props.name}</Text>
            <Image source = {{uri : uri}} style = {styles.choiceImage}/>
            <Text style = {styles.choiceCardTitle}>{name}</Text>
        </View> 
    )
}

  const styles = StyleSheet.create({ 
    choicesContainer: { 
      margin: 10, 
      borderWidth: 2, 
      paddingTop: 100, 
      shadowRadius: 5, 
      paddingBottom: 100, 
      borderColor: 'grey', 
      shadowOpacity: 0.90, 
      flexDirection: 'row', 
      alignItems: 'center', 
      backgroundColor: 'white', 
      justifyContent: 'space-around', 
      shadowColor: 'rgba(0,0,0,0.2)', 
      shadowOffset: { height: 5, width: 5 }, 
    }, 
    choiceContainer: { 
      flex: 1, alignItems: 
      'center', 
    }, 
    choiceDescription: { 
      fontSize: 25, 
      color: '#250902', 
      fontWeight: 'bold', 
      textDecorationLine: 'underline' 
    }, 
    choiceCardTitle: { 
      fontSize: 30, 
      color: '#250902' 
    }, 
    choiceImage: { 
      width: 150, 
      height: 150, 
      padding: 10, },
    })