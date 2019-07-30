import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView  } from 'react-native';

const CHOICES = [ 
  { 
   name: 'rock', uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png' 
  }, 
  { 
    name: 'paper', uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png' 
  }, 
  { 
    name: 'scissors', uri: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png' 
  } ];

const Button = props => (
  <TouchableOpacity
    style={styles.buttonStyle}
    onPress={() => props.onPress(props.name, props.index)}
  >
    <Text style={styles.buttonText}>
      {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
    </Text>
  </TouchableOpacity>
);



export default function App() {
  const [gamePrompt, setGamePrompt] = useState('Choose your weapon!');
  const [userChoice, setUserChoice] = useState(0);
  const [matches, setMatches] = useState(0);
  const [wins, setWins] = useState(0);
  const [ties, setTies] = useState(0);
  const [loses, setLoses] = useState(0);
  const [stylePrompt, setStylePrompt] = useState({
    fontSize : 30, fontWeight : "bold", marginVertical : 20
  })
  const [computerChoice, setComputerChoice] = useState(0);

  const onPress = (name,index) => {
    getRandomNumber = Math.floor(Math.random() * 3);
    setComputerChoice(getRandomNumber);
    setUserChoice(index)
    nameComputerChoice = CHOICES[getRandomNumber].name
    setMatches(matches+1)
    if( getRandomNumber === index) {
      setGamePrompt('Game Tie')
      setTies(ties+1)
    }
    else if (name === "rock" && nameComputerChoice === "scissors"){
      setGamePrompt('Victory!')
      setWins(wins+1)
      setStylePrompt({
        fontSize : 30, fontWeight : "bold", marginVertical : 20,
      })
    }
    else if (name === "paper" && nameComputerChoice === "rock")
    {
      setGamePrompt('Victory!')
      setWins(wins+1)
      setStylePrompt({
        fontSize : 30, fontWeight : "bold", marginVertical : 20, color : "green"
      })
    }
    else if (name === "Scissor" && nameComputerChoice === "paper")
    {
      setGamePrompt('Victory!')
      setWins(wins+1)
      setStylePrompt({
        fontSize : 30, fontWeight : "bold", marginVertical : 20, color : "green"
      })
    }
    else {
      setGamePrompt('Defeat')
      setLoses(loses+1)
      setStylePrompt({
        fontSize : 30, fontWeight : "bold", marginVertical : 20, color : "red"
      })
    }
  };
  return (
      <ScrollView>
        <View style={styles.container}>
        <Text style = {stylePrompt}>{gamePrompt}</Text>
        <View style = {styles.choicesContainer}>
          <View style = {styles.choiceContainer}>
              <Text style = {styles.choiceDescription}>You</Text>
              <Image source = {{uri : CHOICES[userChoice].uri}} style = {styles.choiceImage}/>
              <Text style = {styles.choiceCardTitle}>{CHOICES[userChoice].name}</Text>
          </View>
          <Text>vs</Text>
          <View style = {styles.choiceContainer}>
              <Text style = {styles.choiceDescription}>Computer</Text>
                <Image source = {{uri : CHOICES[computerChoice].uri}} style = {styles.choiceImage}/>
              <Text style = {styles.choiceCardTitle}>{CHOICES[computerChoice].name}</Text>
          </View>

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
          <View >
            <Text style = {styles.result}>Win matches  : {matches === 0 ? 0 : (wins/matches).toFixed(2)*100} %</Text>
            <Text style = {styles.result}>Lose matches : {matches === 0 ? 0 : (loses/matches).toFixed(2)*100} %</Text>
            <Text style = {styles.result}>Tie matches  : {matches === 0 ? 0 : (ties/matches).toFixed(2)*100} %</Text>
          </View>
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
    buttonContainer: { 
      alignItems: 'center', 
      justifyContent: 'center', 
    }, 
    buttonStyle: { 
      width: 200, 
      margin: 10, 
      height: 50, 
      borderRadius: 10, 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#640D14', 
    }, 
    buttonText: { 
      fontSize: 25, 
      color: 'white', 
      fontWeight: 'bold', 
    }, 
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
    result : {
      fontSize : 20,
      marginVertical : 5,
    }
    })
