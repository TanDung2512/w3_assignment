import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView  } from 'react-native';
import Button from './components/Button'
import Choice from './components/Choice';
import Rate   from './components/Rate';
const CHOICES = [ 
  { 
   name: 'rock', uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png' 
  }, 
  { 
    name: 'paper', uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png' 
  }, 
  { 
    name: 'scissors', uri: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png' 
  } 
];


export default function App() {
  const [gamePrompt, setGamePrompt] = useState('Choose your weapon!');
  const [userChoice, setUserChoice] = useState(0);
  const [matches, setMatches]       = useState(0);
  const [wins, setWins]             = useState(0);
  const [ties, setTies]             = useState(0);
  const [loses, setLoses]           = useState(0);
  const [computerChoice, setComputerChoice] = useState(0);
  const [stylePrompt, setStylePrompt]       = useState({
    fontSize : 30, fontWeight : "bold", marginVertical : 20
  })

  const setWin = () => {
    setGamePrompt('Victory!')
    setWins(wins+1)
    setStylePrompt({
      fontSize : 30, fontWeight : "bold", marginVertical : 20, color : "green"
    })
  }

  const setLose = () => {
    setGamePrompt('Defeat')
    setLoses(loses+1)
    setStylePrompt({
      fontSize : 30, fontWeight : "bold", marginVertical : 20, color : "red"
    })
  }

  const setTie = () => {
    setGamePrompt('Game Tie')
    setTies(ties+1)
    setStylePrompt({
      fontSize : 30, fontWeight : "bold", marginVertical : 20, color : "black"
    })
  }

  const onPress = (name,index) => {
    getRandomNumber = Math.floor(Math.random() * 3);

    setComputerChoice(getRandomNumber);
    setUserChoice(index)
    setMatches(matches+1)

    nameComputerChoice = CHOICES[getRandomNumber].name
    if( getRandomNumber === index) {
      setTie()
    }
    else if (name === "rock" && nameComputerChoice === "scissors"){
      setWin()
    }
    else if (name === "paper" && nameComputerChoice === "rock"){
      setWin()
    }
    else if (name === "Scissor" && nameComputerChoice === "paper"){
      setWin()
    }
    else {
      setLose()
    }
  };
  return (
      <ScrollView>
        <View style ={styles.container}>
          <Text style = {stylePrompt}>{gamePrompt}</Text>
          <View style = {styles.choicesContainer}>
            <Choice CHOICE = {CHOICES[userChoice]} name = "You"/>
            <Text>vs</Text>
            <Choice CHOICE = {CHOICES[computerChoice]} name = "Computer"/>
          </View>
          {
            CHOICES.map( (choice, index) => {
              return (
                <Button key = {index} name = {choice.name} index = {index} onPress = {onPress}/>
              )
            })
          }
          <View style = {{marginVertical : 20}}>
            <Text style = {styles.result}>Total Matches : {matches}</Text>
            <Text style = {styles.result}>Total Win Matches : {wins}</Text>
            <Rate wins = {wins} loses = {wins} matches = {matches} ties = {ties}/>
          </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({ 
  container: { 
    marginTop : 20,
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#e9ebee' 
  }, 
  choicesContainer: { 
    margin      : 10, 
    borderWidth : 2, 
    paddingTop  : 100, 
    shadowRadius: 5, 
    paddingBottom: 100, 
    borderColor : 'grey', 
    shadowOpacity: 0.90, 
    flexDirection: 'row', 
    alignItems  : 'center', 
    backgroundColor : 'white', 
    justifyContent  : 'space-around', 
    shadowColor : 'rgba(0,0,0,0.2)', 
    shadowOffset: { height: 5, width: 5 }, 
  }, 
  result : {
    fontSize : 20,
    marginVertical : 5,
  }
})
